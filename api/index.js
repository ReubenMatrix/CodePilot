const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(express.json());
app.use(cors())
app.use('/api/v1',router)





app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})