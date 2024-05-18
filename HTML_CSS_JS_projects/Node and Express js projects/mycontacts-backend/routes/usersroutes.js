const express = require('express');
const app = express();
const PORT = 5000;
 
// Single routing
const router = express.router();

router.post("/register", (req, res) => {
    res.json({message: "Register the User" });
});

router.post("/login", (res, req)=> {
    res.json({ message: "login user" });
});

router.post("/current", (res, req) => {

    res.json({ message: "Current user information"});
});
