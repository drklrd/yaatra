"use strict";

var fs        = require("fs");
var path      = require("path");
var config = require ('../config');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.mysql.database,config.mysql.username,config.mysql.password);
var db        = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        global[model.name] = model;
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName].options) {
        db[modelName].options.associate();
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;