// Comprobar por funcion si una cadena es palindromo

const palindromoMiVersion = ( cadena ) =>{
    let cadenaInver = '';
   
        for( letra of cadena){
                cadenaInver = letra + cadenaInver
        };
        
        if(cadena === cadenaInver){
            console.log(`La palabra ${cadena} SI es palindromo.`);
            console.log(`Al derecho ${cadena} al reves ${cadenaInver}`);
        }
        else{
            console.log(`La palabra ${cadena} NO es palindromo.`);
            console.log(`Al derecho ${cadena} al reves ${cadenaInver}`);
        }
}
//palindromoMiVersion('salas')

 //-------------Version Victor------------------

const palindromoVic = ( texto ) =>{
    let invertido = texto.split('').reverse().join(''); //entrega array join une ('')('|')(' ')
   return (texto === invertido) 
}
    console.log('¿Es un palindromo? :'+palindromoVic("allivessevilla"));
  


//---------------version John -----------------------

 /* 7 Realizar una programa que valide si una palabra o frace dada es un políndromo
        "que se lee igual aldercho o al reves"*/

        const palindromo = (palabra = "") => {
            if (!palabra) return console.warn("no ingreso una palabra");

            let newPalabra = palabra.toLowerCase();
            let alReves = newPalabra.split("").reverse().join("");

            return (newPalabra  === alReves)
                ? console.info(`Si es plalindromo, palabra original ${palabra}, palabra al revés ${alReves}`)
                : console.info(`No es plalindromo, palabra original ${palabra}, palabra al revés ${alReves}`);
        }

         //palindromo("")
        // palindromo("salas"); //Error No funciona para mi