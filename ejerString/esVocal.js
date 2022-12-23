// ---------------------Ejercicio ------------------------- //

// Escriba una función con el nombre de esVocal() que tome un carácter ,
// devuelva True si es vocal (no importa si es mayúscula o minúscula),
// y devuelva False en caso contrario.

// ---------------------Con expresión regular ------------------------- //
function esVocal(caracter) {
    const expReg = new RegExp(/[aeiouAEIOUáéíóú]/, "ig");
    const res = expReg.test(caracter);
    
    res
    ? console.log(`\nEl caracter ${caracter} es una vocal`)
    : console.log(`\nEl caracter ${caracter} No una vocal`);
}

// ---------------------Con lógica anidada ------------------------- //

const esVocalIf = (c) => {
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        return true
    }
    if (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
        return true
    }
    
    return false
    
}

const respuesta = esVocalIf('e');



esVocal(3);
console.log(respuesta) // respuesta: true