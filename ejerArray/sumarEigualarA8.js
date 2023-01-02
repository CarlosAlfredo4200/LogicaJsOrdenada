// Si la suma de dos números es 8 true

const arr1 = [1, 3, 6, 9];
const arr2 = [1, 6, 2, 10];

function esIgualA8(array) {
    
    for (let k = 0; k < array.length; k++) {
        for (let i = 1; i < array.length; i++) {
            if (array[k] + array[i] === 8) {
                console.log(`-----${array[k]} + ${array[i]} si es 8-----`);
            } else {
                console.log(`${array[k]} + ${array[i]} NO es 8`);
            }
        }
    }
}

esIgualA8(arr2)



 
 
 
