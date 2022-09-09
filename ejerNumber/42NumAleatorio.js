// Dados dos número, sacar un numero aleatorio entre ellos

const aleatorio = (num1 ,num2) => {
 //   let a = Math.random() * (num2 - num1);
        return Math.round((Math.random() * (num2 - num1 + 1)) + num1);
}

console.log( aleatorio(10, 50));