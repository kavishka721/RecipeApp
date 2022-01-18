const express = require('express');
const app = express();
let mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const recipeRouter = require('./routes/recipe.route');


// app.use('/', (req, res) => {
//     res.send('Homepage');
// });


app.use(
  express.urlencoded({
    extended: true,
  })
);

//implement db connection 
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//check connectivity of db
if (!db) console.log("cannot connect to the db");
else console.log("Succesfully connected to db");


//route to recipe api calls
app.use('/recipe', recipeRouter());

app.listen(process.env.PORT, () => {
    console.log("backend started on port " + process.env.PORT);
})
