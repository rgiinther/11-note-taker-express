const express = require('express');
const app = express();
const path =require('path')

const PORT = process.env.PORT || 3001;

//set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//what folder the browser can see
app.use(express.static("public"));

//routes to api.js and html.js files

const apiRouter = require("./routes/apiRoute.js");
const apiRouter2 = require("./routes/htmlRoute.js");

app.use("/api", apiRouter);
app.use('/api', apiRouter2);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen (PORT, ()=> {
 console.log("Listening on PORT  http://localhost:" + PORT)
})
