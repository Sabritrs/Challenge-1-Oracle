
function encriptar () {
	var texto = document.querySelector("#input-texto").value; //p/obtener el valor del input
	var textoEncriptado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
	document.querySelector("#msg").value = textoEncriptado;
	document.getElementById("input-texto").value = "";
}


var botonEncriptar = document.querySelector("#btn-encriptar"); 
	botonEncriptar.onclick = encriptar; 



function desencriptar () {
	var texto = document.querySelector("#input-texto").value;
	var textoDesencriptado = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
	document.querySelector("#msg").value = textoDesencriptado;
	document.getElementById("input-texto").value = "";
}


var botonDesencriptar = document.querySelector("#btn-desencriptar");
	botonDesencriptar.onclick = desencriptar;
	


function copy () {
	var copyText = document.querySelector("#msg")
	copyText.select(); 
	document.execCommand("copy"); 
}

document.querySelector("#btn-copy").addEventListener("click", copy);

/*var botonCopiar = document.querySelector("#btn-copy");
	botonCopiar.onclick = copy;*/