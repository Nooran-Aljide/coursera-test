
function check() {
	// body...
	var p1 = document.getElementById("pass1");
	var p2 = document.getElementById("pass2");

	if (p1.value != p2.value){
		     var x= document.getElementById("pass");
		     x.style.display = "block";
		return false ;
  
	}
}