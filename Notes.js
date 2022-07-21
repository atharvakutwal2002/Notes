const fs = require("fs");
const chalk= require('chalk');

const getNotes = () => {
  console.log(" Your Notes .... ");
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  }else{
    console.log("title already taken")
  }
};

const removeNotes= function(title){
  const notes= loadNotes();
  const notesToKeep = notes.filter(function(note){
    return note.title !==title
  })
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.bold.inverse("Notes Removed"))
    saveNotes(notesToKeep)
  }else{
    console.log(chalk.red.bold.inverse("No Note found "))
  }


}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes
};