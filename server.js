// REQUIREMENTS //
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");



// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));    


//ROUTES

app.get('/', function(req, res) {
	res.render('index');
});







    app.listen(3000, function (){
      console.log("listening on port 3000");
    });