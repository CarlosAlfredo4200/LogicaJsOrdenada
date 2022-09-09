
const fibonnacci = (numero) => {
    let serie = [0,1];

    for (let k = 2; k <= numero; k++) {
        
        serie.push(serie[k -1] + serie [k -2]);
    }
    return[serie, serie[numero]];
}

console.log("Serie completa :" +fibonnacci(10)[0]);
console.log("resultado Fib :" +fibonnacci(10)[1]);