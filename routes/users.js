const express = require('express');
const router = express.Router();

//login entry
router.get("/login", (req, res) => {
  res.render("login")
});

router.get("signup", (req, res) => {
  res.render("signup");
});

//signup entry
router.post("/signup", (req, res) => {
});

router.post("/login", (req, res) => {
})

//logout entry
router.get("/logout", (req, res) => {
})

module.exports = router;