
//Create promise-based versions of functions using node style callbacks
const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const { createNewNote, noteDelete } = require('../lib/notes.js');

const notes = require('../db/db.json');
console.log(notes);

// routes

router.get('/notes', (req, res) => {
   
    let results = notes
    console.log(results)
    res.json(results)
    
});

router.post('/notes', (req, res) => {
    let Note = createNewNote(req.body, notes)
    console.log(Note)
    res.json(Note) 
});

router.delete('/notes/:id', (req, res) => {
    const result = noteDelete(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(400);
        //res.send('error')
    }
})

    // //Create new posts
    // app.post("/api/notes", function(req, res) {
        
    //     let newNote = req.body;

    //     // check to find last id in our notes json file, and assign the note to one greater than that id
    //     let lastId = noteContents[noteContents.length - 1]["id"];
    //     let newId = lastId + 1;
    //     newNote["id"] = newId;
        
    //     console.log("Req.body:", req.body);
    //     noteContents.push(newNote);

    //     // write to the noteContents.json file as well
    //     writeFileAsync("db/noteContents.json", JSON.stringify(noteContents)).then(function() {
    //         console.log("noteContents.json has been updated!");
    //     });

    //     res.json(newNote);
    // });

    // // Delete a post
    // app.delete("/api/notes/:id", function(req, res) {

    //     console.log("Req.params:", req.params);
    //     let chosenId = parseInt(req.params.id);
    //     console.log(chosenId);


    //     for (let i = 0; i < noteContents.length; i++) {
    //         if (chosenId === noteContents[i].id) {
    //             // delete noteContents[i];
    //             noteContents.splice(i,1);
                
    //             let noteJSON = JSON.stringify(noteContents, null, 2);
    //             //using placeholders from .json file
    //             writeFileAsync("db/noteContents.json", noteJSON).then(function() {
    //             console.log ("Chosen note has been deleted!");
    //         });                 
    //         }
    //     }
    //     res.json(noteContents);
        
    // });
        
module.exports = router;




