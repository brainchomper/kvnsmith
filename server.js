var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var nodemailer = require("nodemailer");

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: __dirname + '/views/layouts/main.handlebars',
partialsDir: __dirname + '/views/partials',
layoutsDir: __dirname + '/views/layouts'}));
app.set("view engine", "handlebars");


require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
