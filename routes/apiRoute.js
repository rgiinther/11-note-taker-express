
// Linking the noteContents in db to this routes.
var noteContent = require("Develop/db/notesContent")

//Create promise-based versions of functions using node style callbacks
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Create a route
module.exports = function(app) {

    //Display all notes
    app.get("/api/notes", function(req, res) {
        res.json(noteContent);
    });

    //Create new posts
    app.post("/api/notes", function(req, res) {
        
        let newNote = req.body;

        // check to find last id in our notes json file, and assign the note to one greater than that id
        let lastId = noteContent[noteContent.length - 1]["id"];
        let newId = lastId + 1;
        newNote["id"] = newId;
        
        console.log("Req.body:", req.body);
        noteContent.push(newNote);

        // write to the noteContents.json file as well
        writeFileAsync("Develop/db/noteContents.json", JSON.stringify(noteContent)).then(function() {
            console.log("noteContents.json has been updated!");
        });

        res.json(newNote);
    });

    // Delete a post
    app.delete("/api/notes/:id", function(req, res) {

        console.log("Req.params:", req.params);
        let chosenId = parseInt(req.params.id);
        console.log(chosenId);


        for (let i = 0; i < noteContent.length; i++) {
            if (chosenId === noteContent[i].id) {
                // delete noteContents[i];
                noteContents.splice(i,1);
                
                let noteJSON = JSON.stringify(noteContent, null, 2);
                //using placeholders from .json file
                writeFileAsync("Develop/db/noteContent.json", noteJSON).then(function() {
                console.log ("Chosen note has been deleted!");
            });                 
            }
        }
        res.json(noteContent);
        
    });
        
};