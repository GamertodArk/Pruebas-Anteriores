function prueba() {
	// var xhttp = new XMLHttpRquest();
	// var xhttp = new XMLHttpRequest();
	// var xhttp = new ActiveXObject('Microsoft.XMLHTTP');
	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest;
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				alert('funciona ajax');
				document.getElementById('demo').innerHTML = this.responsiveText;
			}
	};

	xhttp.open('GET', 'ajax_info.txt', true);
	xhttp.send();
}