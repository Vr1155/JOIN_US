var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("You have reached the home page!")
});

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});