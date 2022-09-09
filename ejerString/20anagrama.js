// Dadas dos cadenas de Texto comprobar si son anagramas entre si
// anagrama: mismos carateres misma cantidad

const limpiarTexto = ( cadena ) => {

    return cadena
    .replace(/[^\w]/gi, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

}

const anagrama = ( texto1, texto2) => {
    let a = limpiarTexto(texto1);
    let b = limpiarTexto(texto2);

    if(a === b){

        console.log('Si es anagrama');
    }
    else {
        console.log('No es anagrama');

    }
}


 
anagrama('Carlos', 'Carlos');