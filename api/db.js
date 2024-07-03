const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://reuben:reuben@cluster0.qcbivle.mongodb.net/')

const users = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    bio: String,
    totalSubmissions: {
        type: Number,
        default: 0
    }
});

const problems = new mongoose.Schema({
    title: String,
    description: String,
    Topic: String,
    difficulty: String,
    testCases:[
       {
        input: String,
        output: String
       },
    ]
});



const note = mongoose.Schema({
    title: String,
    content: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', users);
const Problem = mongoose.model('Problems', problems);
const Note = mongoose.model('Note', note);

module.exports={
    User,
    Problem,
    Note
};
