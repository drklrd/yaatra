var auth = require('./auth');
var login = require('./login');

module.exports = function(router){

    router.post('/auth/facebook',auth.facebookAuthenticate,auth.createUserConditionally,login.login);

    router.get('/api/v1/test',function(req,res,next){
    	res.json({
    		success : 1,
    		message : 'Cooler'
    	})
    })



}