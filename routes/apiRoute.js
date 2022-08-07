
//Create promise-based versions of functions using node style callbacks
const router = require('express').Router();
const {
    
}
const path = require('path');
const fs = require('fs');

const randomId = require('random-id');


const notes = require('../../db/db.json');
console.log(notes);

// routes

router.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, "../db/db.json"))
   
});

router.post('/api/notes', (req, res)=>{
    const newNote = req.body;
    const len = 10;
    const pattern ='aA0';
    newNote.id= randomId(len, pattern);
    console.log(newNote)

    notes.push(newNote);
    fs.writeFileSync("../db/db.json", JSON.stringify(notes));
    res.json(notes)
})

        
module.exports = router;




