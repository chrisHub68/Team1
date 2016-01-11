var serverAddress = "http://localhost:80";

//holt eine JSON datei über ein HTTP-GET von einer anderen Domain
function getJSON(address){
	var json;
	jQuery.ajax({
			url: address,
            type: "GET",
			async: false,

            success: function(resultData) {
				json = resultData;
            },
            error : function(jqXHR, textStatus, errorThrown) {
				console.log("Failed loading JSON Data.");
            },
        });
	return json;
}

function loadAllPlayers(){
		
	//Setzt Zelle "Meine Favoriten" bei Click auf "Alle Spieler" auf Standardfarben zurück
	document.getElementById("meineFavoriten").style.backgroundColor = "rgb(153,217,234)";
	document.getElementById("meineFavoriten").style.color="#000000";
	
	//Setzt "AlleSpieler" Textfarbe:weiß und BGColor:schwarz
	document.getElementById("alleSpieler").style.color="#FFFFFF";
	document.getElementById("alleSpieler").style.backgroundColor="rgb(0,38,255)";

	loadTable(getJSON(serverAddress + "/AllPlayers"));
}

function loadFavorites(){
	
	document.getElementById("alleSpieler").style.backgroundColor="rgb(153,217,234)";
	document.getElementById("alleSpieler").style.color="#000000";
	
	document.getElementById("meineFavoriten").style.backgroundColor = "rgb(0,38,255)"; 	
	document.getElementById("meineFavoriten").style.color= "#FFFFFF";
	
	loadTable(getJSON(serverAddress + "/Favorites"));	
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
