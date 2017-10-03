(function () {
	var formulario = document.getElementById('formulario');
	var elementos = formulario.elements,
		boton = document.getElementById("btn");
	var nombre = document.getElementById("nombre"),
	 	 apellido = document.getElementById("apellido"),
	 	 correo = document.getElementById("correo"),
	 	 usuario = document.getElementById("usuario"),
	 	 clave = document.getElementById("clave"),
	 	 telefono =document.getElementById("telefono");
	// var expresion = /\w+@\w+\.+[a-z]/;



		// var validarNombre = function(e){
		// 	if (formulario.nombre.value == 0) {
		// 		alert("Tienes que completar el campo Nombre");
		// 		e.preventDefault();
		// 	}
		// }

		// var validarApellido = function (e) {
		// 	if (formulario.apellido.value == 0) {
		// 		alert("tienes que completar el campo Apellido");
		// 		e.preventDefault();
		// 	}
		// }

		// var validarCorreo = function (e) {
		// 	if (formulario.correo.value == 0) {
		// 		alert("Coloca un correo electronico");
		// 		e.preventDefault(e);
		// 	}
		// }

		// var validarUsuario = function (e) {
		// 	if (formulario.usuario.value == 0) {
		// 		alert("Coloca un nombre de usuario");
		// 		e.preventDefault(e);
		// 	}
		// }

		// var validarContraseña = function (e) {
		// 	if (formulario.clave.value == 0) {
		// 		alert("tienes que proporcionar una contraseña valida");
		// 		e.preventDefault(e);
		// 	}
		// }

		// var validarTelefono = function (e) {
		// 	if (formulario.telefono.value == 0) {
		// 		alert("tienes que completar el campo Telefono");
		// 		e.preventDefault(e);
		// 	}
		// } 


		// var validar = function (e) {
		// 	validarNombre(e);
		// 	validarApellido(e);
		// 	validarCorreo(e);
		// 	validarUsuario(e);
		// 	validarContraseña(e);
		// 	validarTelefono(e);
		// }



	var validarCampos = function (e) {
			if (formulario.nombre.value === "" || formulario.apellido.value === "" || formulario.correo.value === "" || 
   			formulario.usuario.value === "" || formulario.clave.value === "" || formulario.telefono.value === "") {
   			alert("Todos los campos son obligatorios");
   			e.preventDefault();
   		} 
		}


		// var validarLength = function(e){
		// 	if (nombre.value.length >= 20) {

  //  			e.preventDefault();
  //  			alert("El nombre es demasiado largo");

  //  		 } else if (apellido.value.length >= 20) {

		// 	e.preventDefault();
		// 	alert("El apellido es demasiado largo");

		//   } else if (correo.value.length >= 100) {

		// 	e.preventDefault();
		// 	alert("Tu correo es demasiado largo");

		//  } else if (usuario.value.length >= 20) {

		// 	e.preventDefault();
		// 	alert("Tu usuario es demasiado largo");

		//  } else if (clave.value.length >= 20) {

		// 	e.preventDefault();
		// 	alert("Tu contraseña es demasiado larga");

		//  } else if (telefono.value.length >= 20) {

		// 	e.preventDefault();
		// 	alert("Numero telefonico invalido");
		//  } else if (isNaN (telefono.value)) {
		//  	alert("el telefono tiene que contener unicamente numeros");
		//  	e.preventDefault();
		//  }
		// }

	var validarNombre = function (e) {
		 if (nombre.value.length >= 20) {

   			alert("El nombre es demasiado largo");
   			e.preventDefault();
   		}
	}

	var validarApellido = function(e) {
		if (apellido.value.length >= 20) {
			alert("El apellido es demasiado largo");
			e.preventDefault();
		}
	}

	var validarCorreo = function(e){
		if (correo.value.length >= 100) {
			alert("Tu correo es demasiado alrgo");
			e.preventDefault();
		} 
	}

	var validarUsuario = function(e){
		if (usuario.value.length >= 20) {
			alert("Tu usuario es demasiado largo");
			e.preventDefault();
		}
	}

	var validarClave = function(e){
		if (clave.value.length >= 20) {
			alert("Tu contraseña es demasiado larga");
			e.preventDefault();
		}
	}

	var validarTelefono = function(e){
		if (telefono.value.length >= 20) {
			alert("Numero telefonico invalido");
			e.preventDefault();
		} else if (isNaN (telefono.value)){
		alert("el telefono debe contener unicamente numeros");
		e.preventDefault();
	}
	}
	
   	var validar = function (e) {
   		validarCampos(e);
   		// validarLength(e);
   		validarNombre(e);
   		validarApellido(e);
   		validarCorreo(e);
   		validarClave(e);
   		validarUsuario(e);
   		validarTelefono(e);
   		
   	}

		formulario.addEventListener("submit", validar)
}())