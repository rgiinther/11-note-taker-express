const router = require('express').Router();
//Create promise-based versions of functions using node style callbacks
const notes = require('../../lib/notes')

const note = require('../../db/db.json');


// routes

router.get('/api/notes', (req, res) => {
   
    res.sendFile(path.join(__dirname, "../../db/db.json"))
});


router.post('/api/notes', (req, res) => {
    notes.createNewNote(req.body)
    
    // note.addNote(Note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(note),
        res.json(note)
        )
       
 
});

module.exports = router;