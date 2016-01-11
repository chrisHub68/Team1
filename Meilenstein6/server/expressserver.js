var express = require('express');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
	
app.listen(80);

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/Favorites' , function(request, response){
	response.json(filterFavorites());
});

app.get('/AllPlayers' , function(request, response){
	response.json(JSON.parse(fs.readFileSync("../json/data.json")));
});

app.put('/Player', function(request,response){	
	appendPlayer(request.body);
	response.send("Ihre Daten wurden gespeichert.");
});

function filterFavorites(){
	var json = JSON.parse(fs.readFileSync("../json/data.json"));
	var favorites = [];
	var pos = 0;
	
	for (var player = 0; player < json.length; player++){
		if(json[player].isFavorite){
			favorites[pos++] = json[player];
		}
	}
	
	return favorites;
}

function appendPlayer(player){
	var string = "";
	
	string += player.firstname + " ";
	string += player.surname + " ,";
	string += player.year + " ,";
	string += player.headcoach + " ,";
	string += player.asisstantcoach + " ,";
	string += player.position + " ,";
	string += player.number;
	
	fs.appendFile("../text/form.txt.txt" , string + "\r\n");	
}