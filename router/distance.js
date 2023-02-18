const express = require("express");
const router = express.Router();

const {distace}= require ("../controllers/distance")


router.get("/",distace)


module.exports=router;