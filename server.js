
const path =require('path');
const fs = require('fs')


const apiRoute = require("./routes/apiRoutes/apiRoute");
const htmlRoute = require("./routes/htmlRoutes/index.js");


const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();

//routes to api.js and html.js files

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


app.use("/", apiRoute);
app.use('/', htmlRoute);


app.listen (PORT, ()=> {
 console.log("Listening on PORT  http://localhost:" + PORT)
})
