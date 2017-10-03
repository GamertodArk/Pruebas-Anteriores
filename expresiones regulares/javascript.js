var cadenaText = "Esto es solo una prueba para ver si Profesor escribir expresiones regulares";
var expresion = new RegExp ( ("pued[a-c]s? | \bprofesor(as?|es)?\b") );
var expresion2 = /(\bprofesor(as?| es)?\b|escribir)/ig;


var imagen = "imagen008";
var expresion3 = /imagen00[1-367]/;

// var test = expresion3.test(imagen);





var test = expresion2.test (cadenaText);

var porque = cadenaText.match(expresion2);

document.write(test);
document.write("  ");
document.write(porque);

/*
Metacaracteres = comodin
 - Sustitucion: los que definen que esperamos en un tenerminado lugar.
   . (punto) ---> acepta cualquier simbolo/caracter.
   [ao] ---> es un listado de caracteres validos en ese lugar del patron.
   [a-z] --> si entre corchetes existe un guion, es un rango.
	[a-eop] -->  se acepta la mezcla entre rangos y opciones
	
  - Cantidad: Definir cuantas veces aparece ese caracter
  * --> lo que esta antes del arterisco (punto, corchetes, los parentesis, caracter estatico),puede estar
	puede no estar, puede repetir
	+ ---> lo que esta detras de simbolo tiene que aparecer como minimo una vez, se puede repetir eternamente
	{num} ---> lo que esta antes tiene que aparecer ese numero de veces
	{num,otro_num} ---> lo que esta antes tiene que aparecer entre esas cantidades (ambas inclusive)
	{num, } ----> estamos definiendo un minimo, pero no un maximo, lo que esta antes tiene que aparecer
	desde esa cantidad de veces.

-ATAJOS:
	(los tajos solo funcionan con este tipo de expresion regular
	/ejemplo/ )

	\w --> representa cualquier caracter alfanumerico [a-zA-Z0-9_]
	\d --> representa solo digitos [0-9]
	\s --> representa cualquier signo de espacio [bara espaciadora, tab, enter]
	\b --> representa cualquier deliminator de palabras (signos de puntuacion que representen un cambio en una palabra
	puntos, comas, comuillas parentesis)

	--cuando coloco los atajos en mayusculas los estoy negando--

	\W --> negacion de cualquier caracter alfanumerico
	\D --> negacion de los digitos
				...



	-DELIMITADORES DE PRINCIPIO O FIN ; 
	^ --> indica que antes de eso no puede haber nada...
	$ --> despues de ese simbolo no puede haber nada..


	-MODIFICADORES:
	i --> viene de la palabra insensitivo, quiere decir que no es sensible a mayusculas y minusculas, si lo colocamos
	en nuestra expresion regular no destinguira entre mayusculas y minusculas

	g --> hace referencia a global, quiere decir que la expresuin afectara a todas las palabras de la cadena, no solo
	a la primera

	m --> hace refencia a multiples lineas, quiere decir que afectara a multiples lineas, en el caso de que hubieran varias 
*/