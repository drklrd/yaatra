'use strict';

module.exports = function(sequelize,DataTypes){

    var Ghumantes = sequelize.define('ghumantes',{

        first_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        last_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : true
        },
        fb_id : {
            type : DataTypes.STRING,
            allowNull : false

        }


    });

    return Ghumantes;


}