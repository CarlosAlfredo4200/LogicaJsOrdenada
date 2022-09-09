// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece
// y la palabra debe ser parametros de funcion


//------------------Version Jhon ------------------------------

// const repeticion = (cadena = "", texto = "") => {
//     if (!cadena) return console.warn("no ingresarte ningun texto");
//     if (!texto) return console.warn("No ingresaste el texto a evaluar");

//     let k = 0;
//     contador = 0;

//     while (k !== -1) {
//         k = cadena.indexOf(texto, k);
//         if (k !== -1) {
//             k++;
//             contador++;
//         }
//     }
//     return console.info(`La palabra ${texto} se repite ${contador} veces`);
// }

// repeticion('hola hola hola como estas hola', 'hola')

//----------------Version Victor-----------------

const buscarPalabra = (cadena, buscar) => {
  let limpiarTexto = cadena.toLowerCase().replace(/[,.!¡]/gi, "");
  let numRepetidas = 0;

  if (limpiarTexto.includes(buscar)) {

    let  palabras = limpiarTexto.split(" ");
    let mapa = {}

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      }
      else{
        mapa[palabra] = 1;
      }
    }

    numRepetidas = mapa[buscar]
  }

  else{ 
       numRepetidas = 0;
  }
  return numRepetidas;
   
};
 console.log((buscarPalabra("hola buen dia, hola, carlos, hola hola  hola!¡¡", "hola")));


//--------------------Mi version -----------------------------

const buscarPalabrasCAdena = (cadena, buscar) => {
  limpiarTexto = cadena.toLowerCase().replace(/[,.!¡]/gi, "");
  numRepetidas = 0;

  if (limpiarTexto.includes(buscar)) {
    let arrayPalabras = limpiarTexto.split(" ");
    for (let p of arrayPalabras) {
      if (p === buscar) {
        numRepetidas += 1;
      }
    }
  }
  console.log(`Las veces que se repite la palabre ${buscar} es :${numRepetidas}`);
};
//buscarPalabrasCAdena("hola buen dia, hola, carlos, hola hola  hola!¡¡", "hola");