// --- ordenar array ---

const array = [5, 2, 6, 5, 8, 9, 1, 0]

array.sort()

// console.log(array); [ 0, 1, 2, 5, 5, 6, 8, 9]

// --- eliminar primer elemento  ---

const arrayb = [5, 2, 6, 5, 8, 9, 1, 0]

arrayb.shift()

// console.log(arrayb); //[2, 6, 5, 8, 9, 1, 0 ]

// --- ¿Qué valor se muestra en consola luego de ejecutar el siguiente código ? ---

const nombres = "Carlos/Alfredo/Andrea/Juan/Joel"
const anombres = nombres.split();
// console.log(anombres.length); 1

// --- ¿Qué método devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin(no se incluye el elemento con indice fin).? ---

const personas = [1, 2, 3, 4, 5,6,7,8,9,10]

 const l = personas.slice(2,4)
 const m = personas.slice(5) // a partir de x index... 

// console.log(l);
// console.log(m);

// --- Una array en Javascript es una colección Indexada de elementos ----

const inte = [1, 2, 3, 4,]

// console.log(inte[4]);//undefined

// ---- ¿Cuál es el resultado que muestra el console.log ? ----

const siglas = ['F', 'B', ['O', 'U'], 'BI']

// console.log(siglas[2][1]); // u

const paises = [['MX', 'CA'], 'ES']
// console.log(paises[0][0][0]);//M