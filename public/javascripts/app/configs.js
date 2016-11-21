var configs = angular.module('ghumante.configs',[]);

configs.config(['$authProvider',function($authProvider){


    $authProvider.facebook({
        clientId: '1315287928489056',
        url: '/auth/facebook'

    });

    //$authProvider.google({
    //    clientId: '127385335963-v846b1e4a535ro1qj0p96fdp77nbpnu7.apps.googleusercontent.com',
    //
    //});



}]);