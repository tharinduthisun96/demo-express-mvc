var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var UserController = require('../controllers/UserController');


router.get('/test',auth ,(req, res)=>{
    UserController.user_list(req,res);
    res.send("User Test");
});

router.post('/store',(req, res)=>{
    console.log(req.body);
    UserController.store(req,res);
    res.send("User");
});

module.exports = router;