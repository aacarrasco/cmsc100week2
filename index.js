//specified to listen to port 5000
var express = require('express');
var app = express(); //instance of express

app.use(require('body-parser')()); //needed for input or payload, asks for input and stores in repbody
app.use(require('method-override')()); //needed for put and delete http request method, mimics put and delete methods using post
app.use(require(__dirname+'/config/router')(express.Router())); //concatenate to /config/router

/*
//put them in separate modules
app.get('/', function(req, res){ //req == request, res == response
	res.send('Hello World!');
});


//test with Advanced Rest Client in Chrome
app.route('/students')
	.get(function(req,res){
		res.send('Get Student');
	})
	.post(function(req,res){
		res.send('Add a Student');
	})
	.put(function(req,res){
		res.send('Update a Student');
	});
*/	
	
var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

