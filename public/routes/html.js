var path = require("path");

module.exports = function (app) {
	// index route loads view.html
	app.get('/', function (req, res) {
		res.render('index');
	})
	app.get('/*', function (req,res){
		res.render('index');
	})
}