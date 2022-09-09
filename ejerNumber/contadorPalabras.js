//Contador de palabras de una cadena

let numPalabras = 0;
const contadorPalabras = (cadena) => {

        //la expresion elimina los espacios de mas entre palabras
    let array = cadena.trim().replace(/\s+/gi, ' ').split(' ');
    for (const palabra of array) {
        numPalabras += 1;

    }
    console.log(`El texto tiene ${numPalabras} palabras`);
}

contadorPalabras('Carlos Alfredo      Montoya d x    ')