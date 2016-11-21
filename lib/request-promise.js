var request = require('request');

module.exports = {

    create : function(options){
        return new Promise(

            function(resolve,reject){

                request(options,function(err,response){
                    if(err) reject(err);
                    resolve(response.body);

                })

            }

        )
    }

}