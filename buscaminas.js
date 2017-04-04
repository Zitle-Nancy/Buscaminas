var btnExplotar = document.getElementsByClassName('explotar');
var bomba =document.getElementsByClassName("bomba");
//console.log(btnExplotar[0]);
var longitud = btnExplotar.length;
console.log(longitud);

for(var i = 0; i < longitud; i++){
	btnExplotar[i].addEventListener('click',mostrarBomba);
	//btnExplotar[i].addEventListener('click',eliminar);

}

function mostrarBomba(sms){
	sms = alert("fin juego");
	for(var j=0; j<longitud; j++){
		var imagen = document.createElement("img");
		imagen.src = "assets/bomba.jpeg";
		bomba[j].appendChild(imagen);
		// var boton = bomba[j].firstChild;
		// bomba[j].removeChild(boton);
		// imagen.previousSibling.remove();
		btnExplotar[0].remove();
	}


}

// function eliminar(){
// 	for(var i= 0; i< longitud; i++){
// 		bomba
// 	}
// }



























// btnExplotar[0].addEventListener('click',mostrarBomba);

// for(var i= 0; i < btnExplotar.length; i++){

// }

// function mostrarBomba(){
// 	// for(var i = 0; i < btnExplotar.length; i++){
// 	// 	console.log(btnExplotar[i]);
// 	// }




// 	var bomba = document.getElementsByClassName('bomba');
// 	var imagen = document.createElement('img');
// 	imagen.src = "assets/bomba.jpeg";
// 	btnExplotar[0].remove();
// 	bomba[0].appendChild(imagen);


// }







// var explotar = document.getElementsByName('explotar');
// explotar.addEventListener('click',mostrarBomba);

// function mostrarBomba() {
// 	var bomba = document.getElementsByName('bomba');
// 	var imagen = document.createElement('img');
// 	///valores asignados
// 	imagen.src = "assets/bomba.jpeg";
// 	//numero.appendChild(imagen);
// 	bomba.removeChild(explotar);
// 	bomba.appendChild(imagen);

// }

