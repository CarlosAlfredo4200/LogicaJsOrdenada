//Dadas dos cadenas de igual longitud contar cuantas diferencias de caracter se encuentran.
//
//Ej. par vs pat = 1

//Validar igualdad de longitud

let diferencias = 0;
const distanciaHamming = (cadena1, cadena2) => {

    if (cadena1.length != cadena2.length) {
        console.log('Los textos no tienen el mismo tamaño! ');
    }
    else {
        for (let k = 0; k < cadena1.length; k++) {

            if (cadena1[k] != cadena2[k]) {
                diferencias += 1;
            }
        }
    }
    console.log('Las diferencias entre ellas es de :'+diferencias);

}

//distanciaHamming('papitosw', 'paratosa');
distanciaHamming('par', 'pat');