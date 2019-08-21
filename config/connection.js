
var Sequelize = require("sequelize");
const jawsdb = process.env.JAWSDB_URL;
if (jawsdb) {
  var sequelize = new Sequelize(jawsdb);
} else {
  var sequelize = new Sequelize("gardening_db", "root", "25064c001023818v", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      insecureAuth: true
    }
  })
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}


// Exports the connection for other files to use
module.exports = sequelize;

