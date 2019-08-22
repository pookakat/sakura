require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var db = require("./models");

var PORT = process.env.PORT || 3001;
console.log;

response.setHeader('Content-Type', 'text/html');

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

db.sequelize.sync({}).then(function(){
  app.listen(3001, function() {
      console.log("App is listening on: http://localhost:" + PORT);
  });
});
