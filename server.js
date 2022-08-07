
const express = require('express');
const apiRoute = require("./routes/apiRoutes/apiRoute");
const htmlRoutes = require("./routes/htmlRoutes/index");



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
