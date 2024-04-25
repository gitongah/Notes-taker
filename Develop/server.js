const express =  require('express');
const path = require('path');
const api = require('./routes/index')

//CHANGE BEFORE DEPLOY
const PORT = 3001;

const app = express();

//Middleware for pasrsing JASON and urlencoded from data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', api);

app.use(express.static('public'));

//Get route for home
app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Get route for the notes
app.get('/notes',(req, res)=>{
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
});

app.listen(PORT, ()=>{
  console.log(`App listening at http://localhost:${PORT}`)
});