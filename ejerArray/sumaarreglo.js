const arr = [1, 2, 3, 4, 5, 6, -10, -3];
const arr2 = [1, 1,1,2,10];

const operacionesarreglo = (arr) => {
    
    //validar si esta vacio
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let suma = 0;
    let sumaMaxMin = 0;
    for (const num of arr) {
        suma = suma + num;
    }

    sumaMaxMin = max + min;

    console.log(`El número mayor e :`+max);
    console.log(`El número menor e :` + min);
    
    console.log('Suma del mayor y menor :'+sumaMaxMin);
    console.log('Suma total :'+suma);
}

operacionesarreglo(arr2)