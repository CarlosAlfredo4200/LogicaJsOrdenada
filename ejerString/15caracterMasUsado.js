// Dada una cadena de TextDecoder, devolver el caracter mas usado

const caracterMasUsado = ( cadena) =>{

    let mapeoLetras = {};
    maxRepeticiones = 0;
    letraMasRepetida ='';

    for(let letra of cadena){
       
        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1;
        }
        else{
            mapeoLetras[letra]++;
        }
    }

    for(let letra in mapeoLetras){
        if(mapeoLetras[letra].toString().trim().length === 1 && mapeoLetras[letra]  > maxRepeticiones){
            maxRepeticiones = mapeoLetras[letra];
            letraMasRepetida = letra
        }

    }

    console.log(`La letra mas repetida es ${letraMasRepetida}`);
    return letraMasRepetida
}

caracterMasUsado('cocacola')