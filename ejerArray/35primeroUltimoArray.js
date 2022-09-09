// Dado un array crear otro con el primer y el ultimo elemento

const nuevoArray = (arrayPrincipal) => {


   let  newArray = [];
   let ultimo = arrayPrincipal.slice(-1)
   
//    newArray.push(arrayPrincipal[0], arrayPrincipal.slice(-1))
    newArray.push(arrayPrincipal[0], arrayPrincipal[arrayPrincipal.length - 1])
     
   console.log(newArray);

     
}

nuevoArray([1,2,3,4,5,6,7,8, 15])