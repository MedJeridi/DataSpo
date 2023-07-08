const express = require("express");
const router = express.Router();

router.get("/profile", (req,res) => {
   res.json({message : "my Users"})
}) 

router.get("/data" , (req, res) => {
   res.send("<a href='/o/profile'> <button> Back to Profile </button> </a>")
})
module.exports = router;