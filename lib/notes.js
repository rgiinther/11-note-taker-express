const fs = require('fs');
const { type } = require('os');
const path = require('path');
const util = require('util');

const notesJson = require('../db/db.json')
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class notes {

    read() {
        return readFileAsync('../db/db.json', 'utf8');
      }
    
      write(note) {
        return writeFileAsync('../db/db.json', JSON.stringify(note));
      }
    
  createNewNote(note) {
        const { title, text } = note
     
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    
    
    };
    
    }


module.exports = new notes;