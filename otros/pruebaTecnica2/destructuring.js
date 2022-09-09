//let a, b = [3, 9]; a=3  b=9
// let a, b = [3, 9, 7]; //  [3, 9, 7]

let obj = {
    a: 8,
    b:2
}

// let { b, a } = obj;  //error

const a = [3, 6, 9, 12, 15];
const [b, c] = a;
 
console.log(b, c); // verdadero 3,6
 
// --- ¿Cómo obtengo el titulo(title) y la ciudad del autor(city) ? ---

const book = {
    title: "Javascript",
    numPages: 300,
    author: {
        name: "Mario",
        address: {
            country: "mexico",
            city:'ciudad de mx'
        }
    }
}

 
const { title, author: { address: { city } } } = book;

console.log(title);
console.log(city);

