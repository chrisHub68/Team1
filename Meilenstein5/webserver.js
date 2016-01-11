var http = require('http');
var fs = require('fs');
var port = 80;
var ip = '141.19.156.119';
var server = http.createServer(handler);
server.listen(port, ip);


function writeForm(formBody){

	var playerData = "";
	var string = "";
	playerData += formBody;
	
	string += writeValue(playerData,"vorname");
	string += ' ' + writeValue(playerData,"name");
	string += ', ' + writeValue(playerData,"jahr");
	string += ', ' + writeValue(playerData,"hcoach");
	string += ', ' + writeValue(playerData,"acoach");
	string += ', ' + writeValue(playerData,"position");
	string += ', ' + writeValue(playerData,"number");

	fs.appendFile('form.txt.txt', string + '\r\n');
}
 
function writeValue(playerData,pattern){
	
	var value = "";
	var pos = playerData.lastIndexOf(pattern) + pattern.length + 1;
	while(playerData[pos] != '&'){
		value+=playerData[pos++];
	}
	return value;
}

function handler(request,response){
	
	console.log('<User connected to server>');
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Sie haben sich erfolgreich auf den WebServer mit der Url <' + port + ':' + ip + '> verbunden');
	
	var playerData = "";
	request.on('data', function (formBody) {
    writeForm(formBody);
	});
}




