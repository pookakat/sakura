"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "production";
var config = require(__dirname + "/../config/config.js")[env];
let models = {};


if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
};


function getModels (config, force = false) {
  if (Object.keys(models).length && !force) {
    return models;
  };

let modules = [
  require('../models/messages'),
  require('../models/user-profiles')
];

models.forEach(file => {
  const model = module(sequelize, Sequelize, config);
  models[model.name] = model;
});
  
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

    models.sequelize = sequelize;
    models.Sequelize = Sequelize;

    return models;
  };


module.exports = db;