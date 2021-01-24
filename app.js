const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const expressEjsLayout = require("express-ejs-layouts");
const app = express();
const port = 8000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(expressEjsLayout);

//body parser
app.use(express.urlencoded({extended : false}));

app.get("/", (req, res) => {
  res.render("home");
});

//using routes folder to route my paths
app.use("/", require("./routes/home"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});