//------- Reduce Comparacion de todos los elementos desde acc VS item
const numbers = [2, 4, 6, 8, 10];

const res = numbers.reduce((acumulador, itemElementoRecorrido, index, arrayIterando) => {
    return acumulador = acumulador + itemElementoRecorrido;
}, 0); // = es el valor inicial que yo desee

//console.log(res);


// -------------------- ----------------------- //


const num = [-5, 0, 1, 2, 4, 6, 8, 10];

const numMayor = num.reduce((acumulador, itemElementoRecorrido, index, arrayIterando) => {

     //console.log('acc :'+acumulador);
     //console.log('e :'+itemElementoRecorrido);
     //console.log('Index :'+index);
     //console.log('array :'+arrayIterando);
    return Math.max(acumulador, itemElementoRecorrido);
}, 0); // = es el valor inicial que yo desee

//console.log(numMayor);

// -------------------- ----------------------- //



const strings = [ 'Mi', 'nombre', 'es', 'Carlos Alfredo'];

const result = strings.reduce((acumulador, itemElementoRecorrido, index, arrayIterando) => {
    return acumulador += itemElementoRecorrido + ' '  ;
}, ' '); // = es el valor inicial que yo desee si no hay toma el indice 0

//console.log(result);

// -------------------- ----------------------- //
const objetos = [
    { nombre: 'Marcos', edad: 15 },
    { nombre: 'Carlos', edad: 44 },
];

const respuesta = objetos.reduce((acc, item) => {
    return acc += item.edad
}, 0);

//console.log(respuesta);


// --------------- Reduce con Array en JavaScript - Uso y malas prácticas-------------- //
// No usarlo porque carga congnitiva mayor, dificil de entender, ventajas de performance
// casi no existen!!! 

const suma = [0, 1, 2, 3, 4].reduce((valorAnterior, valorActual, index, arr) => {
    return valorAnterior + valorActual
},1);

//console.log(suma);

 
