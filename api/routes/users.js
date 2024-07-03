const express = require('express');
const router = express.Router();
const zod = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../secret');
const { User, Problem } = require('../db');
const authMiddleware = require('../middleware');


const signupBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string(),
    bio: zod.string().optional(),
    isAdmin: zod.boolean(),
    totalSubmissions: zod.number(),
});


router.post('/signup', async (req, res) => {
        const {success} = signupBody.safeParse(req.body);

        if (!success) {
            return res.status(400).json({ 
                error: "Invalid data" 
            });
        }

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            bio: req.body.bio,
            isAdmin: req.body.isAdmin,
            totalSubmissions: req.body.totalSubmissions

        })

        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);

        
        res.json({ token });
    
});

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)

})

router.post('/signin',async(req,res)=>{
    const {success}=signinBody.safeParse(req.body)
    
    if(!success){
        return res.status(400).json({
            error: "Invalid data"
        })
    }

    const user = User.find({
        email: req.body.email,
        password: req.body.password

    })
    if(!user){
        return res.status(400).json({
            message:'User does not exist'
        })
    
    }

    const userId = user._id

    const token = jwt.sign({userId},JWT_SECRET)
    res.json({token})
})


router.get('/getuser',authMiddleware,async(req, res)=>{
    const user =await User.findById(req.userId)

    if(!user){
        return res.status(404).json({
            error: "User not found"
        })
    }

    res.json({
        user: {
            name: user.name,
            email: user.email,
            bio: user.bio,
            isAdmin: user.isAdmin,
            totalSubmissions: user.totalSubmissions
        }
    })
})

router.post('/logout', authMiddleware,async(req, res)=>{
    res.json({message: 'Logged out'})
})


router.post('/submissions', authMiddleware,async(req, res)=>{
    try {
        const userId = req.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.totalSubmissions += 1;
        await user.save();

    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



module.exports = router;


