const frase = "Java es genial";
const texto ="Script"

function insertarTexto (cadena, texto, caracter) {
   return  cadena.slice(0,caracter)+texto+ " "+cadena.slice(caracter + 1);
    
}

console.log(insertarTexto(frase, texto, 4));
