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
  fs.readFile(file, 'utf8', (error, data) => {
    if(error){
      console.error(error);
    }else{
      const parseData = JSON.parse(data);
      parseData.push(content);
      writeToFile(file, parseData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend}

