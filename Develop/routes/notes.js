const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const uuid = require('../helper/uuid');

//Get route for reciving all the notes
notes.get('/', (req, res) =>{
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST route for a new note
notes.post('/', (req, res) =>{
  console.info(`${req.method} request recived to add a note`);
  console.log(req.body);

  const {title , text} = req.body;

if (title && text){
  const newNote ={
    title,
    text,
    id: uuid(),
  };
  console.log(newNote);
  readAndAppend(newNote, './db/db.json');
  res.json(`note added successfully`);
}else{
  res.error(`error in adding a new note`);
}

});

module.exports = notes;