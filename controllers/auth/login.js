var config = require('../../config.js');
var jwt = require("jsonwebtoken");
var jwtSecret = config.jwtSecret;

var bcrypt = require('bcryptjs');


module.exports = {

    login : function(req,res){

        var token = jwt.sign({
            email: req.response.email
        }, jwtSecret, {
            expiresIn: 60 * 60
        });

        var data = {
            token : token,
            user : req.response.email
        }
        console.log('RESPONDED !',data);
        res.json({
            success : 1,
            error : 0,
            data : data
        })

    }

}