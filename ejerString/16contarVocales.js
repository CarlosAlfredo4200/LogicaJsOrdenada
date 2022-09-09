// Dada una cadena de texto, devolver cuantas vocales y consonantes tiene

const extraerVocales = (cadena) => {
     
    let vocales = 0;
    consonantes = 0;
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra))
            consonantes++;
    }
    return console.log({
        cadena,
        vocales,
        consonantes
    })

}

extraerVocales('La lectura es el proceso de comprensión de algún tipo de información o ideas almacenadas en un soporte y transmitidas mediante algún tipo de código, usualmente un lenguaje, que puede ser visual o táctil (por ejemplo, el sistema braille)')