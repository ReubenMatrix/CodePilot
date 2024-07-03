const express = require('express');
const router = express.Router();
const zod = require('zod');
const { Problem } = require('../db');

const problemBody = zod.object({
    title: zod.string(),
    description: zod.string(),
    Topic: zod.string(),
    difficulty: zod.string(),
    testCases: zod.array(
        zod.object({
          input: zod.string(),
          output:zod.string()
        })
    )
});




router.post('/newproblem',async(req,res)=>{
    const {success} = problemBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({
            error: "Invalid data"
        });
    }

    const problem = await Problem.create({
        title: req.body.title,
        description: req.body.description,
        Topic: req.body.Topic,
        difficulty: req.body.difficulty,
        testCases: req.body.testCases
    })

    res.json({problem});

})


router.get('/allproblems',async(req, res)=>{
    const problems = await Problem.find();
    res.json({problems});

})

router.get('/problem', async (req, res) => {
    const title = req.query.title; 

    try {
        const problem = await Problem.findOne({ title: title });

        if (!problem) {
            return res.status(404).json({
                error: "Problem not found"
            });
        }

        res.json({ problem });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});


module.exports= router