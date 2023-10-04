import express from 'express';
const app=express();

app.use(express.static('dist'));

// app.get('/',(req, res)=>{
//     res.send('Server is ready');
// })

app.get('/api/jokes',(req, res)=>{
const jokes=[
    {
        id:1,
        title:'Joke One',
        content:'This is a joke one'
    },
    {
        id:2,
        title:'Joke Two',
        content:'This is a no. two joke one'
    },
    {
        id:3,
        title:'Joke Three',
        content:'This is a no. threejoke one'
    },
    {
        id:4,
        title:'Joke Four',
        content:'This is a no. four joke one'
    },
    {
        id:5,
        title:'Joke Five',
        content:'This is a no. five joke one'
    }
];
res.send(jokes);
})
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})