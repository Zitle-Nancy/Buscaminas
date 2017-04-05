var btnExplotar = document.getElementsByClassName('explotar');
var bomba =document.getElementsByClassName("bomba");
var btnNumeros = document.getElementsByClassName("btnNumeros");
var btnNumeros1 = document.getElementsByClassName("btnNumeros1");
var btnColor = document.getElementsByClassName('nombreColor');
var longitud = btnExplotar.length;


///////for para numero 1 
for(var y = 0; y < btnNumeros1.length; y++){
	btnNumeros1[y].addEventListener('click', mostrarNumeros1);
}
//////////////////////////////

////////////for para los numeros 2
for(var z=0; z < btnNumeros.length; z++){
	btnNumeros[z].addEventListener('click',mostrarNumeros);
}
/////////////////////////////////////

///for para las casillas de colores///
for(var x=0; x < btnColor.length; x++){
	btnColor[x].addEventListener('click', colorear);
}

///////////colorear casillas////ç
function colorear(){
	///si se pinta la celda pero el boton la tapa por eso pongo style.display para ocultarlo
	var casillaColor = this.parentElement;
	this.style.display = "none";
	casillaColor.style.background = "pink";
}

/////////fin de colorear casillas


///////////funciones de numeros///////////////7

function mostrarNumeros1(){
	var casilla = this.parentElement;
		if(this.value == "1"){
			casilla.innerText = "1";
		}
}

function mostrarNumeros(){
	var casilla = this.parentElement;
	console.log(casilla);

	if (this.value == "2"){
		casilla.innerText = "2";
	}

}
///////////////////fin de numeros //////////7////////77

///mandar a llamar la funcion cada que se le de click
for(var i = 0; i < longitud; i++){
	btnExplotar[i].addEventListener('click',mostrarBomba);
}

function mostrarBomba(){
	//para desabilitar cada boton por que es un arreglo
	//numeros 2
	for(var z=0; z < btnNumeros.length; z++){
		btnNumeros[z].disabled = true;
	}
	///para numeros 1
	for(var y = 0; y < btnNumeros1.length; y++){
		btnNumeros1[y].disabled = true;
	}
	///para colores
	for(var x=0; x < btnColor.length; x++){
		btnColor[x].disabled = true;
	}

	

	for(var j=0; j<longitud; j++){
		var imagen = document.createElement("img");
		imagen.src = "assets/bomba.jpeg";
		bomba[j].appendChild(imagen);
		/////formas de eliminar el boton////////////7
		// var boton = bomba[j].firstChild;
		// bomba[j].removeChild(boton);
		// imagen.previousSibling.remove();
		///////////fin de las formas de eliminar el boton///////////77
		//el cero se pone porque al eliminar un elemento del arreglo este se modifica por lo cual 
		//debemos eliminar siempre el indice cero
		btnExplotar[0].remove();
	}
	///////darle tiempo a la alert de que ejecute//////
	setTimeout(function(){
		alert("Esto ha Explotado :(");
	},200);

	setTimeout(function(){
		var respuesta = confirm("Deseas volver a jugar");
	},300);
	
	// if (respuesta){
	// 	alert("ok");
	// }
}

