
var Sequelize = require("sequelize");
const jawsdb = process.env.JAWSDB_URL;
if (jawsdb) {
  var sequelize = new Sequelize(jawsdb);
  console.log('running jawsDB', jawsdb);
} else {
  var sequelize = new Sequelize("gardening_db", "root", "password", {
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
  })
  .catch(err => {
  });
}


// Exports the connection for other files to use
module.exports = sequelize;

