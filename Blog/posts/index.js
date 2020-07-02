const express = require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(express.json());
const posts = {}
app.use(cors());
app.get('/posts', (req,res)=>{
    res.send(posts);
})

app.post('/posts',async (req,res)=>{
    //generate random ID Strings
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id,title
    }
    await axios.post('http://localhost:4005/events', {
        type:'PostCreated',
        data:{
            id,title
        }
    })
    res.status(201).send(posts[id]);
})
app.post('/events',(req,res)=>{
    console.log(`Event Comming: ${req.body.type}`)

    res.send('');
})
const Port = 4000 || process.env.PORT;
app.listen(Port,()=>{
    console.log(`Posts server is running on port ${Port}`);
})