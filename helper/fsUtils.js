const { error } = require('console');
const fs = require('fs');
const util = require('util');

//Promise version of the fs.readfile

const readFromFile =  util.promisify(fs.readFile);

const writeToFile = (destination, content) =>{
  fs.writeFile(destination, JSON.stringify(content, null, 4), (error)=> 
    error ? console.error(error): console.info(`\nData written to ${destination}`)
);
}

const readAndAppend = (content, file) =>{
  fs.readFile(file, 'utf8', (error, note) => {
    if(error){
      console.error(error);
    }else{
      const parseData = JSON.parse(note);
      parseData.push(content);
      writeToFile(file, parseData);
    }
  });
};



const deleteItem = (id, file)=>{
  fs.readFile(file, 'utf8', (error, note) => {
    if(error){
      console.error(error);
    }else{
      const parseData = JSON.parse(note);
      filteredNotes = parseData.filter((note)=> note.id !== id)
      writeToFile(file, filteredNotes);
    }
  });

}

//write the api for delete

module.exports = { readFromFile, writeToFile, readAndAppend, deleteItem}

