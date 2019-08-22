"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js")[env];
var db = {};




if (typeof process.env.JAWSDB_URL != undefined) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
};


if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    const connection = mysql.createConnection({
        port: 3001,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'gardens_db'
    })
};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;