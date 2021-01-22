const express = require('express');
const ejs = require('ejs');
const app = express()
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("aboutme");
});

app.get('/aboutme', (req, res) => {
  res.render("aboutme");
});

app.get('/myjourney', (req, res) => {
  res.render("myjourney");
});

app.get('/login', (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});