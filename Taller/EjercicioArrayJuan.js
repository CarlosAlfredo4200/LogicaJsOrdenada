let array = [];
let arr= [1,1,6,4,5,9,3,7,45,]
let menoresde15 = []

const numeros = () => {
  for (let k = 0; k < 100; k++) {
    array.push(k);
  }
};

 numeros();

 console.log(array);

//----------------

//recorrer array
let suma = 0
let producto = 1
for (let index = 1; index < array.length; index++) {
   if( index < 5){
       suma += array[index]
    }

    if(index > 97 ){

        producto = producto * array[index]
    }

    if( index % 42 === 0){
            console.log(index);
    }
    
}

console.log(array);
console.log(producto);
 
 