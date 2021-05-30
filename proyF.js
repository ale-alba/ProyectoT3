function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var FG = function (n1, n2, n3){ 

	var n1 = parseInt(document.getElementById("introduce el valor de a").value);
	
	var n2 = parseInt(document.getElementById("introduce el valor de b").value);

	var n3 = parseInt(document.getElementById("introduce el valor de c").value);
	
	var dos= Math.pow(n2, 2);

    var mult= 4 * n1 * n3;
	
	var DR = dos - mult;
	
	var r= Math.sqrt (DR)

	var suma= (- n2 + r / 2 * n1);

	
 	

	

	return suma;
	 }

	 var V = function (n1, n2){ 

	var numero1 = parseInt(document.getElementById("Distancia").value);
	var numero2 = parseInt(document.getElementById("Tiempo").value);


	var resultado = numero1 / numero2;

	return resultado;

	}