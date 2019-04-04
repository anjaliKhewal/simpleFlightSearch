var express = require('express');
var app = express();

const fs = require('fs');

let rawdata = fs.readFileSync('flight-sample.json');
let flightdata =  JSON.parse(rawdata);
//console.log(flightdata);

app.get('/', function(req, res){
   res.send("Flight Search System");
});

app.get('/:flight/:date', function(req, res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.writeHead(200, { 'Content-Type': 'application/json' });
	var keys = Object.keys(flightdata);
	
	for(var i=0, length = keys.length; i<length; i++){
		date = flightdata[keys[i]].departure.substring(0,10);
		
		if (req.params.flight == flightdata[keys[i]].flightNumber
		&& req.params.date == date){
			
			res.write(JSON.stringify(flightdata[keys[i]])); 
			break;
          
		}
	}
			 res.end(); 
});

app.get('/details/:origin/:destination/:date', function(req, res) {

   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.writeHead(200, { 'Content-Type': 'application/json' });
	var keys = Object.keys(flightdata);
	
	for(var i=0, length = keys.length; i<length; i++){
		date = flightdata[keys[i]].departure.substring(0,10);
		
		if (req.params.origin == flightdata[keys[i]].origin && req.params.destination == flightdata[keys[i]].destination 
		&& req.params.date == date){
			
			res.write(JSON.stringify(flightdata[keys[i]])); 
			break;
          
		}
          
	}
	res.end(); 
});

console.log("server started!");

app.listen(3000);