// Dados dos array, devolver array con solo los elementos comunes entre ellos.



 

const elementosComunes = (array1, array2) => {

    const filtrado = array1.filter(e => {
      return  array2.includes(e) //includes revisa si existe en el array 2
    })
    return filtrado;
    

}
console.log(elementosComunes([4,5,6,7], [7,8,9,7,5]))


 