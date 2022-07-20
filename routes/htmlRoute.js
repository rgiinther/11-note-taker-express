// Path package to get the file path for the html
var path = require("path");
const router = require('express').Router();
// Create a route

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router