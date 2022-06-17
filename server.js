const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

//set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//what folder the browser can see
app.use(express.static("public"));

//routes to api.js and html.js files
require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

app.listen (PORT, ()=> {
 console.log("Listening on PORT  http://localhost:" + PORT)
})
