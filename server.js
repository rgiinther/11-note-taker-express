
const express = require('express');
const apiRoute = require("./routes/notesRoutes");
const htmlRoutes = require("./routes/index");
const path = require('path')


const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use("/api", apiRoute);
app.use('/', htmlRoutes);

app.listen (PORT, ()=> {
 console.log("Listening on PORT  http://localhost:" + PORT)
})
