const frase = "JavaScript es tremendo"

function truncar(cadena, limite) {
     return cadena.slice(0, limite) + "...";
}

console.log(truncar(frase, 14));
console.log(truncar(frase, 4));
