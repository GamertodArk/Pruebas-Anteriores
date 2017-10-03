(function () {
	var usuario = document.getElementById("usuario"),
		nombre = document.getElementById("nombre"),
		apellido = document.getElementById("apellido"),
		email = document.getElementById("email"),
		contraseña = document.getElementById("contraseña"),
		boton = document.getElementById("boton");
	var formulario = document.getElementsByTagName('form')[0];


	var validarUsuario = function (e) {
		if (usuario.value == "") {
			alert("ingresa un nombre de usuario");
			e.preventDefault();
		} else if (usuario.value.length <= 3) {
			alert("El nombre de usuario de demasiado corto");
			e.preventDefault();
		}
	}

	var validarNombre =  function (e) {
		// var expresion = /{3,}/;
		// var test = expresion.test(nombre.value);
		 if (nombre.value == "") {
			alert("Ingresa un nombre");
			e.preventDefault();

		} else if (nombre.value.length <= 3) {
			alert("El nombre es demasiado corto");
			e.preventDefault();
		}
	}

	var validarApellido = function (e) {
		// var expresion = /\D/;
		// var test = expresion.test(apellido.value);
		  if (apellido.value == "") {
			alert("Ingresa un apellido");
			e.preventDefault();
		}else if (apellido.value.length <= 3 ) {
			alert("El apellido es demasiado corto");
			e.preventDefault();
		// } else if (expresion.test(apellido.value) == true) {
		// 	alert("Ingresa un apellido valido");
		// 	e.preventDefault();
		}
	}

	var validarEmail = function (e) {
		// var expresion = /[a-z]@[a-z]\D\.[a-z]/i;
		// var test = expresion.test(email.value);

		if (email.value == "") {
			alert("tienes que agregar un correo electronico");
			e.preventDefault();
		} else if (email.value.length <= 3) {
			alert("el correo electronico es demasiado corto");
			e.preventDefault();
		}
		

		// if (test == true) {
		// 	alert("ingresa un correo electronico valido");
		// 	e.preventDefault();
		// }
	}

	var validarContraseña = function (e) {
		if (contraseña.value == "") {
			alert("Tienes que agregar una contraseña");
			e.preventDefault();
		} else if (contraseña.value.length <= 3) {
			alert("Tu contraseña es demasiado corta");
			e.preventDefault();
		}
	}

	var validaciones  = function(e){
		validarUsuario(e);
		validarNombre(e);
		validarApellido(e);
		validarEmail(e);
		validarContraseña(e);
	}


	formulario.addEventListener("submit", validaciones);


}())