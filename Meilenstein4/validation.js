
function validate(){
	

	if(compareNumber(document.getElementById("jahr"), 0, 2015)|
	compareNumber(document.getElementById("number"), 4, 15) |
	compareLetter(document.getElementById("acoach"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("hcoach"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("verein"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("name"),/^[a-zA-Z]+$/)|
	compareLetter(document.getElementById("vorname"),/^[a-zA-Z]+$/)==true){

	window.alert("Einige Eingaben sind fehlerhaft.\nBitte überprüfen Sie ihre Eingaben");
	return false;

	}else{
		
		return true;
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


