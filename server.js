const express = require('express');
const path =require('path');
const fs = require('fs')
const apiRoute = require("./routes/apiRoute.js");
const htmlRoute = require("./routes/htmlRoute.js");

const PORT = process.env.PORT || 3001;
const app = express();

//what folder the browser can see
app.use(express.static("public"));

//routes to api.js and html.js files

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


app.use("/", apiRoute);
app.use('/', htmlRoute);


app.listen (PORT, ()=> {
 console.log("Listening on PORT  http://localhost:" + PORT)
})
