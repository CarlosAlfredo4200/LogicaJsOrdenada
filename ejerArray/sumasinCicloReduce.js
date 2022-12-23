const numbers = [3,5,6,2];

const objArray = [
    {
        id: 1,
        valor:3
    },
    {
        id: 1,
        valor:5
    },
    {
        id: 1,
        valor:6
    },
    {
        id: 1,
        valor:2
    },

]
const sumaResult = numbers.reduce((x, y) => x + y);

const sumaObj =  objArray.reduce((x,y) => x + y.valor, 0);
console.log(sumaResult);
console.log(sumaObj);


 