 const array = [-1,1,"hola",2,"Carlos",4,5 ];
 const arrayB = [1,2,3,4,5,-1];
 const abc = ["a", "b", "c", "e","f", "g"];
 const concatNumber = [1,2,3,4,5];


// console.log(Math.max(...array));
// console.log(Math.min(...array));

// const arrayEvery = array.every((number, index) => {
//     console.log(index);
//     return typeof number ==="number"
    
// });
// console.log({arrayEvery});

console.log("\n");
const arrayFilter = array.filter((number, index) => {
    console.log(index);
    return typeof number !=="number"
    
});
console.log({arrayFilter});

console.log("\n");
const arraySome = array.some((number, index) => {
    console.log(index);
    return typeof number ==="number"
    
});
console.log({arraySome});
 

const suma = arrayB.reduce((x, y ) => x + y);
console.log(suma);

const newabc = abc.reduce((X, y) => X.concat(y));
console.log(newabc);

const concatNumeros = concatNumber.reduce((x, y) => x.toString().concat(y)*1);
console.log(concatNumeros);
 



