require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var timeout = require('connection-timeout');
var morgan = require('morgan');
var app = express();
var db = require("./models/index");

var PORT = process.env.PORT || 3001;
console.log;

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

function haltOnTimedOut(req,res,next){
  if (!req.timedout) next();
};

app.use("/static", express.static("public"));
app.use(timeout(15000));
app.use(haltOnTimedOut);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(haltOnTimedOut);

app.use(function(req, res, next) {
    response.setHeader('Content-Type', 'text/html');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

var routes = require("./routes/apiRoutes.js");

app.use('/', routes);
app.use(haltOnTimedOut);


app.listen(PORT, function() {
  console.log("App is listening on: http://localhost:" + PORT);
});