// Dado un string cuales son las letras que aparecen
// una sola vez y cual es la primera.
// ejemp: "frase-frase-HOY"
// [['H',"O","Y"], "H"]


const unaLetra = ( cadena ) => {

    let sinRepetir = [];
    let contador = {};

   let letras =cadena.split('').filter( letra => letra.trim().length >= 1);

    for (const letra of letras) {
       if(!contador[letra]){
            contador[letra] = 1;
       }else{
        contador[letra]++;
       }
    }

    for (const key in contador) {
       if(contador[key] >= 2){
        delete contador[key];
       }
       else{
        sinRepetir.push(key)
       }
    }
    console.log([sinRepetir, sinRepetir[0]]);

}

unaLetra('frase frase HOY')