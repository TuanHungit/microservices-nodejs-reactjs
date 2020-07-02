const express = require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};
app.get('/posts/:id/comments',(req,res)=>{
    res.status(201).send(commentsByPostId[req.params.id] || []);
})

app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id:commentId,content});
    commentsByPostId[req.params.id] = comments;
    axios.post("http://localhost:4005/events",{
        type:"CommentCreated",
        data:{
            id:commentId,
            content,
            postId: req.params.id
        }
    })
    res.status(201).send(comments);
})
app.post('/events',(req,res)=>{
    console.log(`Event Comming: ${req.body.type}`)

    res.send('');
})
const Port = 4001 || process.env.Port;
app.listen(Port,()=>{
    console.log(`Comments server is running on port ${Port}`);
})