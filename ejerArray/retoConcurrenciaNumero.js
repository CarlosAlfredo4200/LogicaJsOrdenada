// Cuantas veces aparece cada numero del array

// Podrías utilizar un array asociativo, es decir, un array clave-valor en el cual cada una de las claves del array haría referencia a cada uno de los números diferentes de tu array.

// Después, recorrer cada uno de los números del array mediante un bucle y sumarle, para cada uno de los números, el contador que tuvieran anteriormente (o 0 si no había aparecido aparecido ese número todavía) más uno. Al ser un array asociativo puedes saber cual es el contador que tenía cada número anteriormente debido a que la clave dentro del array repetidos va a ser igual al número en cuestión.

const array = [1,2,2,3,3,3];

const repetidos = {};

array.forEach((numero) => {
  repetidos[numero] = (repetidos[numero] || 0) + 1;
   
});

console.log(repetidos);