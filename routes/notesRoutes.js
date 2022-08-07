const router = require('express').Router();
const path = require('path');
const util = require('util');
const fs = require('fs');
const db = require('../db/db');

const writeFileAsync = util.promisify(fs.writeFile);
// routes

router.get("/notes", (req, res) => {
  res.header("Content-Type", "application/json");
  res.json(db);
});


// This route is for POST requests
router.post("/notes", (req, res) => {
  let newNote = req.body;

  let lastId = db[db.length - 1]["id"];
  let newId = lastId + 1;
  newNote["id"] = newId;

  db.push(newNote);

  writeFileAsync("./db/db.json", JSON.stringify(db, null, 2)).then(function(){
    console.log('note has been uploaded');
  });
  res.json(newNote);

});


module.exports = router;