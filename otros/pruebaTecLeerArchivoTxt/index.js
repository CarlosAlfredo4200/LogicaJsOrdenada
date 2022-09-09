const titulo = document.getElementById('title').innerHTML ='Prueba técnica LEER ARCHIVO TXT'


// Almacenar los datos numericos de archivo txt

const arrayData = [];
const archivoTxt = new XMLHttpRequest(); // recibe cualquier tipo de dato
let total = 0;
const fileRuta = 'index.txt';

archivoTxt.open("GET", fileRuta, false);
archivoTxt.send(null);

const txt = archivoTxt.responseText;

for (const num of txt) {
    arrayData.push(num) * 1
}
for (let k = 0; k < arrayData.length; k++) {
    total += parseInt(arrayData[k]) ;
    
}
const archivo = document.getElementById('main').innerHTML = arrayData
const respuesta = document.getElementById('result').innerHTML = "La suma es :"+ total;
 
 
