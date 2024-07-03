import axios from 'axios';
import React, { useEffect, useState } from 'react';

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/notes/getnotes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setNotes(res.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    fetchNotes();
  }, []);
  

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/notes/note/${noteId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
    <h2 className="text-2xl font-bold mb-4 flex">Notes</h2>
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note._id} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">{note.title}</h3>
            <p className="text-sm text-gray-600" style={{ whiteSpace: 'pre-wrap' }}>{note.content}</p>
          </div>
          <button
            className='bg-black text-white rounded-md px-4 py-2'
            onClick={() => handleDeleteNote(note._id)}
          >
            Delete
          </button>
        </div>
      ))}
      {notes.length === 0 && <p>No notes found.</p>}
    </div>
  </div>

  );
}

export default NoteList;
