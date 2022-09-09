// Dado un Array de números devolver el valor mas bajo y el mas alto
// en formato json


function altoYBajo( entradaArray) {
     
    let arrayOrdenado = entradaArray.sort((a,b) => a - b)
    let menor = arrayOrdenado[0];
    let mayor = arrayOrdenado[arrayOrdenado.length -1];
     
    //console.log(menor);
    // console.log(JSON.stringify({
    //     Mayor:mayor,
    //     Menor:menor
    // }));
        
        return {
            Array:arrayOrdenado,
            Menor: arrayOrdenado[0],
            Mayor: arrayOrdenado[arrayOrdenado.length -1]
        }
}

console.log( altoYBajo([5,2,6,45,77,4,3,8]));




