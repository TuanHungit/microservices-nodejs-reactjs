const express = require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');
const app = express();
app.use(express.json());
const posts = {}
app.use(cors());
app.get('/posts', (req,res)=>{
    res.send(posts);
})

app.post('/posts',(req,res)=>{
    //generate random ID Strings
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id,title
    }
    res.status(201).send(posts[id]);
})
const Port = 4000 || process.env.PORT;
app.listen(Port,()=>{
    console.log(`Posts server is running on port ${Port}`);
})