const fs = require('fs');
const { type } = require('os');
const path = require('path');
const uniqid = require('uniqid')

const notesJson = require('../db/db.json')

function filterByQuery(query, )


function noteDelete(id) {
    for (let i = 0; i < notesJson.length; i++) {
        let currentNote = notesJson[i];

        if (currentNote.id == id) {
            notesJson.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesJson, null, 2)
            );

            break;
        }
    }
}

function createNewNote(body, notes) {
    const addNote = body
 
    notesJson.push(addNote);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({notes: notesJson}, null, 2)
    )

    return addNote;

};

function validatenotes(addNote) {
    if (!addNote.title || typeof addNote.title !== 'string') {
        return false;
    }
    if (!addNote.text || typeof addNote.text !== 'string') {
        return false;
    }
    if (!addNote.id || typeof addNote.id !== 'int') {
        return false;
    }
    return true;

}


module.exports = { noteDelete, createNewNote, validatenotes }