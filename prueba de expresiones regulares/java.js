var formularios = document.getElementsByTagName('form')[0];
var texto = document.getElementById("pene");
var boton = document.getElementById("btn");
var file = document.getElementById("file");

formularios.onsubmit = function () {
	var expresion = /^[a-z]{3,}$/i;
	var expresion2 = /\.(pdf|odf|docx?)$/;

	var respuesta = expresion.test(texto.value);

	var archivo = expresion2.test(file.value);


	if (respuesta == false) {
		alert("no coincide");
	return false;	
	}

	if (archivo == false) {
		alert("el archivo es invalido");
		return false;
	}

}