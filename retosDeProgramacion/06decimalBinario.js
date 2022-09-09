// * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.


const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("Ingrese el número a convetir");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" No es un número`);

    if (base == undefined) return console.warn("Ingrese la base a convetir");

    if (typeof base !== "number") return console.error(`El valor "${base}" No es un número`);

    if (base === 2) {
        return console.info(`El número ${numero}  con base ${base} es igual a ${parseInt(numero, base)} base 10`); //de binario a decimal parseInt
    }
    else if (base === 10) {
        return console.info(`El número ${numero}  con base ${base} es igual a ${(numero.toString(2))} base 2`);//decimal a binario toString
    }
    else {
        return console.error("El tipo de base a convertir no es válido");
    }
}
        // convertirBinarioDecimal();
        // convertirBinarioDecimal("2")
        // convertirBinarioDecimal(100)
        // convertirBinarioDecimal(100,"2")
         convertirBinarioDecimal(100,2)
        // convertirBinarioDecimal(4,10)
        // convertirBinarioDecimal(114,10)
        // convertirBinarioDecimal(114,3)