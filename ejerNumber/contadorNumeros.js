// Contar solo los numeros


const contadorNumeros = (cadena) => {
    
    //match busca todas las concordancias de la expresión
    let numeros = cadena.match(/[0-9]/gi);
    console.log(`El la cantidad de nùmeros encontrados es : ${numeros.length} `);
}

contadorNumeros('askdjfjfksjdj1k2k3ksdksldkl1234')