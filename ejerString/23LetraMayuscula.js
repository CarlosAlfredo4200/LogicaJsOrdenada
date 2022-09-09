// Dada una cadena de texto cambiar la primera letra de cada palabra a mayuscula


const cambiarAMayuscula = (cadena) => {
    let resultado = ''
    for (const letra in cadena) {
        if (cadena[letra - 1] === ' ' || parseInt(letra) === 0) {
            resultado += cadena[letra].toUpperCase();
        }
        else {
            resultado += cadena[letra]
        }
    }
    return resultado;
}

console.log(cambiarAMayuscula('hola como estan'));


//-----------------------------------------

const cambiarAMayusculaB = (cadena) => {
    let palabras = [];
    for (const palabra of cadena.split(' ')) {
        palabras.push(palabra[0].toUpperCase() + palabra.slice(1))
    }
    return palabras.join(' ');
}
console.log(cambiarAMayusculaB('hola como estan'));

let hora = 30;
numHorasdia = 3;

const dia = numHorasdia * hora
let semana = dia * 5;
console.log(semana);