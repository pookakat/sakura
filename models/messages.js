const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes){
    const Messages = sequelize.define('Messages', {
        userInit: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        userReceiving: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false

        }

    },
        {
            freezeTableName: true
        });

   return Messages;
};