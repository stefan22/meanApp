// call dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
// typical way to call module.exports files
// require('./filename');
// object data now available through config var.
var config = require('./config');

// run new instance
var app = express();

// adding bodyParser.Setting extended value to false will only parse
// strings. True will parse anything:images,video,strings etc.
app.use(bodyParser.urlencoded({extended: true}));
// parse json value
app.use(bodyParser.json());
// parse morgan to log all of the requests to the console/
// terminal. ex: `GET / 200 8.980 ms - 135`
app.use(morgan('dev'));

// ready to call a file (index.html)
// app.get and callback function use 
// to get file through any route
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/views/index.html');

});

//config.port replaces 3000
app.listen(config.port, function(err) {
	if(err) {
		console.log('damnit ' + err);
	} else {
		console.log('Listening on port 3000 OK!');
	}
});