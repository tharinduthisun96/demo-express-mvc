var express = require('express');
var router = express.Router();

router.use('/',(req, res,next) =>{
    console.log("Req recevied");
    next();
});