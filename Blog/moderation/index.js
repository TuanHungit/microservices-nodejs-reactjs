const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json())

app.post('/events',(req,res)=>{})
app.listen(4003,()=>{
    console.log("Moderation server in running on port 4003");
})