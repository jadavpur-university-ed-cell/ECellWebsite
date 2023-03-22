const express = require("express");
const router = express.Router();

// index page
router.get("/", function (req, res) {
    res.render("pages/index", {});
});

// about page
router.get("/about", function (req, res) {
    res.render("pages/about", {});
});

// startups page
router.get("/startups", function (req, res) {
    res.render("pages/startups", {});
});

// events page
router.get("/events", function (req, res) {
    res.render("pages/events", {});
});

// contact page
router.get("/contact", function (req, res) {
    res.render("pages/contact", {});
});

// hult page
router.get("/hult", function (req, res) {
    res.render("pages/hult", {});
});

// eweekend page
router.get("/eweekend", function (req, res) {
    res.render("pages/eweekend", {});
});

// esummit page
router.get("/esummit", function (req, res) {
    res.render("pages/esummit", {});
});
// initiatives page
router.get("/initiatives", function (req, res) {
    res.render("pages/initiatives", {});
});

// join-us page
router.get("/join-us", function (req, res) {
    res.render("pages/join-us", {});
});


module.exports = router;