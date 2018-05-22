var express = require("express");
var bodyParser = require("body-parser");
// var sequelize = require("sequelize");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
const http = require('http');
// const app = require('./app');
const http = require('http');


// var db = require("./models");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/html.js")(app);
// require("./routes/api.js")(app);
http.createServer(app).listen(process.env.PORT);
// db.sequelize.sync().then(function() {
  // app.listen(PORT, function() {
  //   console.log("App listening on PORT " + PORT);
  // });
// });

// <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">  font

// dump data
// { force: true }