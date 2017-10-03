
var imagen = document.getElementsByTagName("img")[0];
var boton = document.getElementsByTagName("button")[0];


function zoom() {
	// imagen.setAttribute("class", "zoom");

	if (imagen.className == "Nozoom") {
		imagen.className = " zoom";
	} else {
		imagen.className = "";
		imagen.className = "Nozoom";
	}

}