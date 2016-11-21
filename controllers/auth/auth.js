var request = require('request');
var config = require('../../config.js');
var requestPromise = require('../../lib/request-promise');

module.exports = {

    facebookAuthenticate : function(req,res,next){

        var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name','context','picture'];
        var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
        var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');

        var params = {
            code: req.body.code,
            client_id: req.body.clientId,
            client_secret: config.FACEBOOK_SECRET,
            redirect_uri: req.body.redirectUri
        };

        requestPromise.create({method: 'get', url: accessTokenUrl, qs: params, json: true })
            .then(function(response){
                return requestPromise.create({ method: 'get',url: graphApiUrl, qs: response, json: true} )
            })
            .then(function(response){
                console.log('RESPO',response)
                if(response) {
                    req.response = response;
                    next();
                }else{
                    next(new Error('No Profile Found !'))
                }
            })
    },

    createUserConditionally : function(req,res,next){

        ghumantes.findOne({
            where : {
                fb_id : req.response.id
            }
        }).then(function(result){
            // console.log('RESULTA',result);
            if(!result){
                var createOptions = {
                    email : req.response.email,
                    first_name : req.response.first_name,
                    last_name : req.response.last_name,
                    fb_id : req.response.id
                }
                return ghumantes.create(createOptions)
            }
            return next();
        }).then(function(response){

            if(response) next();
        }).catch(function(err){
            return next(err);
        })
    },

    login : function(req,res,next){

    }

}