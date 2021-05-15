var models = require('../models');
var UserModel = models.User;
var UserService = require('../services/UserService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 78300,
    });
}

exports.user_list = function(req, res) {
    
    console.log("UserController");
    UserService.user_list(req,res);
};

exports.store = function(req,res){

    const { firstName, lastName, email } = req.body;
    const user = UserModel.create({ firstName: "Jane", lastName: "Doe" , email:""});
   // const token = generateToken({ id: user.id });
    

}