
const parrafoMayusculas = document.getElementById('p1');
const contenidoP1 = parrafoMayusculas.innerHTML

const parrafoMayusculasInicial = document.getElementById('p2');
const contenidoP2 = parrafoMayusculasInicial.innerHTML
const x = contenidoP2;

const boton = document.getElementById('button');
const botonModi = document.getElementById('button');

const form = document.getElementById('form');
const ullist = document.getElementById('lista');
const ullistModificada = document.getElementById('listaModificada');
const InputMen = document.getElementById('mensajeInput')

const parrafoRes = document.getElementById('respuestap1');
const parrafo2Res = document.getElementById('respuestap2');





let mayusculas = ''
let inicioMayusculas = ''

const cambioParrafor = (cadena1, cadena2) => {


    let palabraToUpperCase = [];
    for (const palabra of cadena1.split(' ')) {
        palabraToUpperCase.push(palabra.toUpperCase());

    }

    mayusculas = palabraToUpperCase.join(' ');

    let palabraInicialMayuscula = [];
    for (const palabra of cadena2.split(' ')) {
        palabraInicialMayuscula.push(palabra.charAt(0).toUpperCase() + palabra.slice(1))
    }
    inicioMayusculas = palabraInicialMayuscula.join(' ');

}


cambioParrafor(contenidoP1, contenidoP2)


//  --- crear las p para las respuestas ---

const parrafoMayusculasRespuesta = document.createElement('p');
parrafoMayusculasRespuesta.textContent = 'Respuesta JS: ' + mayusculas;
parrafoRes.appendChild(parrafoMayusculasRespuesta)



const parrafoMayuInicialRespuesta = document.createElement('p');
parrafoMayuInicialRespuesta.textContent = 'Respuesta JS: ' + inicioMayusculas;
parrafo2Res.appendChild(parrafoMayuInicialRespuesta);



// --- fuccion para ingresar ---

let mensaje ='';
const extraerMensaje = () => {
    const men = document.getElementById('mensajeInput').value;
    mensaje = men;
    const resListValue = document.createElement('li');
    resListValue.textContent = mensaje
    ullist.appendChild(resListValue);

    const menModi = document.getElementById('mensajeInput').value;
    mensajeMod = menModi.charAt(0).toUpperCase()+menModi.slice(1);
    const resListValueModi = document.createElement('li');
    resListValueModi.style.textTransform = "capitalize";
    resListValueModi.style.color ="rgb(0, 149, 255)";
    resListValueModi.textContent = mensajeMod
    ullistModificada.appendChild(resListValueModi);
    
    limpiar()
}


const limpiar = () => {
    document.getElementById('mensajeInput').value = '';
}
 
 
 
boton.addEventListener('click', extraerMensaje);



 






