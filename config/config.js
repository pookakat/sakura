module.exports = {
  "development": {
      "username": process.env.MYSQL_USER,
      "password": process.env.MYSQL_KEY,
      "database": process.env.MYSQL_DBNAME,
      "host": process.env.MYSQL_HOST,
      "dialect": "mysql",
      "url": "mssql://localhost:3002/gardening_db"
      },
    "test": {
      "username": "root",
      "password": "password",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "url": "mssql://localhost:3002/gardening_db"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql",
      "url": "mysql://lm4tkikohrr52ljs:fhayany3f90q1rua@cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/de6g2kkphqecqbq4"
    }
  }
 