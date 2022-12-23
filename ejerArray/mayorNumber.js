const array = [-1,1,2,3,4,5, 6];

//--- Forma reduce (Mala practica)
 const maxReduce = array.reduce((valorAnterior, ValorAcumulado, indice, array) =>{
    if(valorAnterior < ValorAcumulado){
        return ValorAcumulado
    }
    return valorAnterior
})

console.log(maxReduce);



//---Forma directa ----------------------------------------------


//console.log(Math.max(...array));
//console.log(Math.min(...array));