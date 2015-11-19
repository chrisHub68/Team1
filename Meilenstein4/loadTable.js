

function loadAllPlayers(){
	
	//Setzt Zelle "Meine Favoriten" bei Click auf "Alle Spieler" auf Standardfarben zurück
	document.getElementById("meineFavoriten").style.backgroundColor = "rgb(153,217,234)";
	document.getElementById("meineFavoriten").style.color="#000000";
	
	//Setzt bei Click auf "AlleSpieler" Textfarbe:weiß und BGColor:schwarz
	document.getElementById("alleSpieler").style.color="#FFFFFF";
	document.getElementById("alleSpieler").style.backgroundColor="rgb(0,38,255)";
	
	
}

function loadFavorites(){
	
	document.getElementById("alleSpieler").style.backgroundColor="rgb(153,217,234)";
	document.getElementById("alleSpieler").style.color="#000000";
	
	document.getElementById("meineFavoriten").style.backgroundColor = "rgb(0,38,255)"; 	
	document.getElementById("meineFavoriten").style.color= "#FFFFFF";
	
}