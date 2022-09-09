// Dada la expresión regular de JavaScript /^ [A - C]\w +\ses\s\w + / 
// indicar cuáles de las siguientes cadenas hacen match con la expresión regular,
// y en caso de hacer match, qué parte o partes son las que hacen match:

const  a = ' Juan es guapo'
const  b = 'Adriano no es feo'
const  c = 'Adriano deja de ser guapo'
const  d = 'Adriano ya es guapo'
const  e = 'No es ahora'
const  f = 'Ahora es no'
const  g = 'Adriano es guapo'

// empiezan por A seguido con uno más caracteres seguido de un espacio en blanco seguido con la cadena 'es' con otro espacio en blanco y seguido con uno o más caracteres
const expRefEjemplo = /^[A-C]\w+\ses\s\w+/ 
//console.log(expRefEjemplo.exec(f));


// -- EXPRESIONES REGULARES --
 
const num = 'B2'
const cadena = 'Carlos 4 Alfredo  5 Montoya 6 Carlos 8 carlos, . -'
// -- esto es lo mismo  encontrar numeros--
let expReg1 = /\d/;
let expReg2 = /[0-9]/;


// -- esto es lo mismo  encontrar --
 

let expReg3 = /[^0-9]/;
// --   encontrar todas las letras --
let expReg4 = /[^]/;
let expReg5 = /^[A-C]/;
// --   encontrar todos los caracteres alfabeticos y números --
let expReg6 = /\w/gi;
// --   encontrar todos los caracteres NO alfabeticos y números --
let expReg7 = /\W/gi;


 

// console.log(expReg1.exec(num));
// console.log(expReg2.exec(num));
// console.log(expReg3.exec(num));
// console.log(expReg3.test(num));
// console.log(expReg4.exec(num));
// console.log(expReg4.exec(cadena));
// console.log(expReg5.exec(cadena));

// -- esto es lo mismo --
// console.log(cadena.replace(/\d/gi, '#'));
// console.log(cadena.replace(new RegExp(/\d/gi), '#'));
// console.log(cadena.replace(expReg6, '*'));


// Escriba una expresión regular que reconozca las cadenas de doble comillas.Debe permitir la presencia de comillas y caracteres escapados.

// 

let bb = 'bb'
// console.log(bb.match(/b|bb/));
 
// ---------------------------------------------- //

// Se quiere poner un espacio en blanco después de la aparición de cada coma:

const addEspacios = "a,b,c,1,2,d, e,f"

console.log(addEspacios.replace(/,/g, ", "));

// Esta otra funciona bien con los números pero no con los espacios ya existentes:
console.log(addEspacios.replace(/,(\S)/g, ", $1"));
