const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

router.get("/myjourney", (req, res) => {
  res.render("myjourney");
});

module.exports = router;
