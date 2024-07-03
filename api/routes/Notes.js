const express = require('express');
const router = express.Router();
const Note = require('../db').Note
const zod = require('zod');
const authMiddleware = require('../middleware');

const noteBody = zod.object({
    title: zod.string(),
    content: zod.string()
   
});

router.post('/newNote', authMiddleware, async (req, res) => {
    try{
    const {success} = noteBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({
            error: "Invalid data"
        });
    }

    const id = req.userId

    const note = new Note({
        title: req.body.title,
        content: req.body.content,
        userId: id
    })

    await note.save();

    res.status(201).json(note);
}catch(err){
    console.log(err)
}
  
});


router.get('/getnotes',  authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const notes = await Note.find({ userId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/note/:id',  authMiddleware, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put('/note/:id', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete('/note/:id', authMiddleware, async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
