// Dado un texto devolver cuantas consonante y vocales tiene

const contadorVocalesConsonantes = (cadena) => {

    let vocales = 0;
    let consonantes = 0;

  let textoLimpio = cadena
    .split("")
    .filter((letra) => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
    .join("");


    for (const letras of textoLimpio) {
        if(/[áéíóúaeiou]/gi.test(letras)){
            vocales++;
        }
        else {
            consonantes++;
        }
    }
  console.log(vocales);
  console.log(consonantes);
};

contadorVocalesConsonantes("abc , . 45 9 aádefgHIjK");
