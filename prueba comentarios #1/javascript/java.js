// CONSEGUIDO!!!!!!!!!!!!!!!!!!!


(function () {
	var input = document.getElementById("comentario");
	var boton = document.getElementById("boton");
	var lista = document.getElementById("lista");




    var agreCom = function() {
    	var contenido = input.value;
    	var elemento = document.createElement("li");
    	var contenido2 = document.createTextNode(contenido);

        elemento.appendChild(contenido2);

    	lista.appendChild(elemento);

       input.value ="";
    }


	boton.addEventListener("click", agreCom);
}())