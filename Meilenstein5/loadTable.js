var arrayPlayers = [];
var arrayFavorites = [];

function loadAllPlayers(){
	
	//Setzt Zelle "Meine Favoriten" bei Click auf "Alle Spieler" auf Standardfarben zurück
	document.getElementById("meineFavoriten").style.backgroundColor = "rgb(153,217,234)";
	document.getElementById("meineFavoriten").style.color="#000000";
	
	//Setzt "AlleSpieler" Textfarbe:weiß und BGColor:schwarz
	document.getElementById("alleSpieler").style.color="#FFFFFF";
	document.getElementById("alleSpieler").style.backgroundColor="rgb(0,38,255)";

	loadTable(arrayPlayers);
	
}

function loadFavorites(){
	
	document.getElementById("alleSpieler").style.backgroundColor="rgb(153,217,234)";
	document.getElementById("alleSpieler").style.color="#000000";
	
	document.getElementById("meineFavoriten").style.backgroundColor = "rgb(0,38,255)"; 	
	document.getElementById("meineFavoriten").style.color= "#FFFFFF";
	
	loadTable(arrayFavorites);
	
}

// Lädt alle Spieler mit Favorite:true in ein Array
function loadArrayFavorites(){

	var count = 0;
	
	for(var player=0; player < arrayPlayers.length; player++){
		if(arrayPlayers[player].isFavorite == true){
			arrayFavorites[count++] = arrayPlayers[player];
		}
	}	
}

function loadTable(loadthis){
	
	clearTable();
	
	var table = document.getElementById("spieler");	
	var row;

	for(var i=0; i< loadthis.length; i++){

		row = table.insertRow(-1);
		
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		cell4 = row.insertCell(3);
		cell5 = row.insertCell(4);
		cell6 = row.insertCell(5);
		cell7 = row.insertCell(6);
		cell8 = row.insertCell(7);

		cell1.innerHTML = loadthis[i].firstname + " " + loadthis[i].surname	;
		cell2.innerHTML = loadthis[i].team;
		cell3.innerHTML = loadthis[i].headcoach;
		cell4.innerHTML = loadthis[i].asisstantcoach;
		cell5.innerHTML = loadthis[i].position;
		
		if(loadthis[i].isActive){
			cell6.innerHTML = "ja";
		}else{
			cell6.innerHTML = "nein";
		}
		cell7.innerHTML = loadthis[i].number;
		cell8.innerHTML = loadthis[i].year;
	}
}

//löscht alle Zeilen aus einer Tabelle
function clearTable(){
	
	var parent = document.getElementById("spieler");
    while(parent.hasChildNodes())
    {
       parent.removeChild(parent.firstChild);
    }
		
}

function loadJSON(){
	
	var xml = new XMLHttpRequest();	
	
	xml.onreadystatechange = function(){
		if (xml.readyState == 4 && xml.status == 200) {
			arrayPlayers = JSON.parse(xml.responseText);
			loadAllPlayers();
			loadArrayFavorites();
		}
	};
	
	xml.open("GET", "data.json" , true);
    xml.send();		
}