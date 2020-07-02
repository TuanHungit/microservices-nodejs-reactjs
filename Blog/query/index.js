const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.get('/posts',(req,res)=>{});

app.post('/events',(req,res)=>{})
app.listen(4002,()=>{
    console.log('Query sever is running on prt 4002');
})