const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("request is coming to the router");
})

router.get("/question",(req,res) => {
    res.send(" Question request comming");
})

module.exports = router;