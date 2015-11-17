var firstmistake = false;


function validate(){
		
	var x=/[a-zA-z]+/;

	compare(document.getElementById("name"),x);
	/*compare(document.getElementById("vorname"),"/[a-zA-z]+");
	compare(document.getElementById("verein"),"/[a-zA-z]+");
	compare(document.getElementById("hcoach"),"/[a-zA-z]+");
	compare(document.getElementById("acoach"),"/[a-zA-z]+");
	compare(document.getElementById("number"),"/[a-zA-z]+");
	compare(document.getElementById("jahr"),"/[a-zA-z]+");
	*/

	

	if(firstmistake == true){
	
	window.alert("Einige Eingaben sind fehlerhaft.\nBitte überprüfen Sie ihre Eingaben");
	return false;

	}else{
		
		return true;
	}
		
}


function compare(inputobject,regex){
	
	
	if(inputobject.value.match(regex) == false){
		inputobject.style.border = "red";
		window.alert("test");
	
		if(firstmistake == false){
			window.alert("test");
			inputobject.focus();
			firstmistake = true;
			}
		return 0;
	}else{
		return 0;
	}
	
}


