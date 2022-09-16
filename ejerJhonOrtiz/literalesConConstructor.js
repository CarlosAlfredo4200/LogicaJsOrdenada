let nom = 'javascript';
let nom2 = new String('Javascript');

console.log(nom );
console.log(nom2 );

//------------- Fn ------------

let restaFn = new Function ('a', 'b', 'return a - b');
console.log(restaFn(10, 5));

//--------------- Objetos ----------

let persona = { id:1, nombre:'Alfredo'};
persona2 = new Object();
persona2.id = 2;
persona2.nombre = 'Juan';
console.log( persona2);
