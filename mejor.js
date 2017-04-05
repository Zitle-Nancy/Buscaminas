var btnExplotar = document.getElementsByClassName('explotar');
var bomba =document.getElementsByClassName("bomba");
var numeros1 = document.getElementsByClassName("numeros1");
var numeros2 = document.getElementsByClassName("numeros2");

var btnNumeros = document.getElementsByClassName("btnNumeros");
var btnNumeros1 = document.getElementsByClassName("btnNumeros1");

var longitud = btnExplotar.length;
var longitudNumeros1 = numeros1.length;
var longitudNumeros = numeros2.length;
console.log(longitudNumeros);

///////////interactuar con los botones como nos da arreglos
for(var a=0; a<longitudNumeros; a++){
	btnNumeros[a].addEventListener("click",agregarNumeros);
}
function agregarNumeros(){
	for(var b=0; b < longitudNumeros; b++){
		numeros2[b].innerText = "2";
	}
	
}

///////////para boton con numero 1////////77
for(var c=0; c<longitudNumeros1; c++){
	btnNumeros1[c].addEventListener("click",agregarNumeros1);
}
function agregarNumeros1(){
	for(var b=0; b < longitudNumeros1; b++){
		numeros1[b].innerText = "1";
	}
	
}

///mandar a llamar la funcion cada que se le de click
for(var i = 0; i < longitud; i++){
	btnExplotar[i].addEventListener('click',mostrarBomba);
	//btnExplotar[i].addEventListener('click',eliminar);

}

function mostrarBomba(sms){
	alert("fin juego");	
	for(var j=0; j<longitud; j++){
		var imagen = document.createElement("img");
		imagen.src = "assets/bomba.jpeg";
		bomba[j].appendChild(imagen);
		/////formas de eliminar el boton////////////7
		// var boton = bomba[j].firstChild;
		// bomba[j].removeChild(boton);
		// imagen.previousSibling.remove();
		btnExplotar[0].remove();
	}


}

