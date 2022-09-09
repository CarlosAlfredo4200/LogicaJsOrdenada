// Dado un número mostrar todos sus números divisores


const numDivisores = ( num, posible_divisor) => {

 if( num % posible_divisor === 0){
    return posible_divisor
 }
 return 0
}


const mostrarDivisores = ( num ) => {

    for (let k = 1; k <=num; k++) {
        
        let esDivisor = numDivisores(num, k);

        if(esDivisor) console.log(esDivisor);
    }
}

mostrarDivisores(20)