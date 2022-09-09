// Dado un array de numeros devolver el array con los numero elevados al cuadrado.
// Debe eliminar cualquier contenido que no sea número


const newArray = [];
const selecNumeroArray = (array) => {

   array.forEach(element => {
      if(typeof element =="number"){
        newArray.push(element * element)
      }
   });

   console.log(newArray);


}

selecNumeroArray([1,2,3,"Carlos",true,4,"Montoya"])

// --- Version Victor ---

const alcuadrado = (array) => {
     
    let numCuadrado = array
    .filter(array => typeof array === "number")
    .map( array => Math.pow(array, 2))
    
    ;
   
//    console.log(numCuadrado);
    return numCuadrado
}

 console.log(alcuadrado(["Alfredo", 6, 7, true])); 