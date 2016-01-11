
function validate(){
	
	if(compareNumber(document.getElementById("jahr"), 0, 2015)|
	compareNumber(document.getElementById("number"), 4, 15) |
	compareLetter(document.getElementById("acoach"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("hcoach"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("verein"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("name"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("vorname"),/^[a-zA-Z]+$/)==true){

	window.alert("Einige Eingaben sind fehlerhaft.\nBitte überprüfen Sie ihre Eingaben");
	}else{
		putValues();
	}
		
}
function compareNumber(inputobject, lowerbound, upperbound){
	if(inputobject.value >= lowerbound && inputobject.value <= upperbound){
		inputobject.style.border = "none";
		return false;	
	} else {
		inputobject.style.border = "3px solid red";
		inputobject.focus();
		return true;
	}
} 

function compareLetter(inputobject,regex){
	
	
	if(inputobject.value.search(regex) == -1){
		inputobject.style.border = "3px solid red";
		inputobject.focus();
	return true;
	}else{
		inputobject.style.border = "none";
		return false;
	}
	
}

function putValues(){
	
	var object = {
    "isActive": document.getElementById("aktiv").value ,
    "isFavorite": document.getElementById("favo").value ,
    "year": document.getElementById("jahr").value ,
    "number": document.getElementById("number").value ,
    "firstname": document.getElementById("vorname").value ,
    "surname": document.getElementById("name").value ,
    "headcoach": document.getElementById("hcoach").value ,
    "asisstantcoach": document.getElementById("acoach").value ,
    "team": document.getElementById("verein").value ,
    "position": document.getElementById("position").value ,
	};
/*
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("PUT", "http://localhost:80/Player");
	xmlhttp.send(object);
*/
jQuery.ajax({
	url : "http://localhost:80/Player",
	type: 'PUT',
	data: object,
	
	success: function(message){
		window.alert(message);
	}
});

}



