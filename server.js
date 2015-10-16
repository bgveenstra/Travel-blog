// REQUIREMENTS //
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");




app.get('/', function(req, res) {
	res.send('test');
});







    app.listen(3000, function (){
      console.log("listening on port 3000");
    });