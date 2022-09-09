// Dada una cadena de texto y un número, recortarlo y mostrar los x primeros caracteres indicados

const recortar = (cadena = '', limit) => 
    ( !cadena ) 
    ?  console.warn("No has ingresado ningun caracter")
    :  console.log(cadena.slice(0, limit));
;

recortar("carlos", 4);


// ----------------Version Victor --------------

const recortarV = ( cadena, limit) => {

        let resultado = '';

        if(typeof cadena === 'string' && typeof limit === 'number'){

            resultado = cadena.substring(0, limit)

        }
        else{
            console.log('Ingrese corectamente los datos');
        }

        return resultado
}

console.log(recortarV('Carlos', 3));