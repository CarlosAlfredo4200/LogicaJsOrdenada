// Dado un array de número, sacar la media entre ellos

const media = ( array ) =>{

    // const suma = array.reduce(acumulador, numeroActual) => {
    //     return acumulador + numeroActual;
    // } ;

    let suma = 0
    let cantidad = 0
    for (let k = 0; k < array.length; k++) {
        suma += array[k] 
    }
    cantidad = array.length
    console.log(suma/cantidad);
     
}

media([1,2,3,4,5,6])