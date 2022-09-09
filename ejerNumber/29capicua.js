//Dado un número validar si es capicua. se lee igual al derecho o al reves

//Ej 2002

const alrevez = (numero) => {
    let invertir = (numero.toString().split('').reverse().join('')) * 1;
    (numero === invertir) ? console.log(`El número ${numero} es capicua`) : console.log(`El número ${numero} no es capicua`);
}

alrevez(2002)