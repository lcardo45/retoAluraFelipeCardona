function encriptar(){
    let texto = document.getElementById("textoNormal").value;
    let titulo = document.getElementById("titulo2");
    let parrafo = document.getElementById("parrafo");
    let imagen1  = document.getElementById("imagen1");
    
    let textoRevuelto = texto.replace(/i/gi, "imes")
    .replace(/e/gi, "enter")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
    if (texto.length !=0){
        document.getElementById("textoNormal").value = textoRevuelto;
    titulo.textContent  = "Texto encriptado";
    parrafo.textContent = "";
    imagen1.src = "./images/img2.avif";
    
    }
    else {
        imagen1.src = "./images/descarga1.png";
        titulo.textContent  = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar"
        alert("debes Ingresar un texto")

    }
    
}


function devolver(){
    let texto = document.getElementById("textoNormal").value;
    let titulo = document.getElementById("titulo2");
    let parrafo = document.getElementById("parrafo");
    let imagen1  = document.getElementById("imagen1");
    
    let textoRevuelto = texto
    .replace(/enter/gi, "e")
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if (texto.length !=0){
        document.getElementById("textoNormal").value = textoRevuelto;
    titulo.textContent  = "Texto desencriptado"
    parrafo.textContent = "";
    imagen1.src = "./images/img3.webp";
    
    }
    else {
        imagen1.src = "./images/descarga1.png";
        titulo.textContent  = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar"
        alert("debes Ingresar un texto")

    }
    
}