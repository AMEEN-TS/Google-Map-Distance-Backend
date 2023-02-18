const express = require("express");
const router = express.Router();

const {distance}= require ("../controllers/distance")


router.get("/",distance)


module.exports=router;