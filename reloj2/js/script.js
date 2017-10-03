(function () {
		
	var actualizarHora = function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			minutos = fecha.getMinutes(),
			ampm,
			segundos = fecha.getSeconds(),
			dia = fecha.getDate(),
			diaSemana = fecha.getDay(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();



		var pHoras = document.getElementById('horas'),
		    pMinutos = document.getElementById('minutos'),
		    pAMPM = document.getElementById('ampm'),
		    pSegundos = document.getElementById('segundos'),
		    pDia = document.getElementById('dia'),
		    pDiaSemana = document.getElementById('diaSemana'),
		    pMes = document.getElementById('mes');
		    pYear = document.getElementById('year');


		var semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
		var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
		pDiaSemana.textContent = semana[diaSemana];
		pMes.textContent = meses[mes];
		pDia.textContent = dia; 
		pYear.textContent = year;



		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM'
		}else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas = 12;
		}

		if (minutos < 10) {
			minutos = '0' + minutos;
		}

		if (segundos < 10) {
			segundos = '0' + segundos;
		}

		pHoras.textContent = horas;
		pSegundos.textContent = segundos;
		pMinutos.textContent = minutos;
		pAMPM.textContent = ampm;
	}

	actualizarHora();
	setInterval(actualizarHora, 1000);
}())

