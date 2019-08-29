module.exports = {
  "development": {
      "username": process.env.MYSQL_USER,
      "password": process.env.MYSQL_KEY,
      "database": process.env.MYSQL_DBNAME,
      "host": process.env.MYSQL_HOST,
      "dialect": "mysql",
      "url": "mssql://localhost:3002/gardens_db"
      },
    "test": {
      "username": "root",
      "password": "password",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "url": "mssql://localhost:3002/gardens_db"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql",
    }
  }
 