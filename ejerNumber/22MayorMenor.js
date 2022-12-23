// Dados dos números indique cual es el mayor y el menor

const numMayor = (num1, num2) =>
  num1 > num2
    ? console.log(`El número ${num1} es mayor que ${num2}`)
    : console.log(`El número ${num2} es mayor que ${num1}`);

numMayor(15, 6);

// ------------ Version victor --------------

const numeroMayor = (numero1, numero2) => {
  if (numero1 === numero2) {
    console.log("Los números son iguales");
  } else if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
  } else {
    console.log(`El número ${numero2} es mayor que ${numero1}`);
  }
};

numeroMayor(3, 6);

//------------------- Versión if ------------------
console.log("\nVersion con lógica if anidada");
const numeroMayorIf = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else if (n3 > n1 && n3 > n2) {
    return n3;
  } else {
    return "son iguales";
  }
};

const respuesta = numeroMayorIf(2, 8, 5);
console.log(respuesta);

//------------------- Versión métodos ------------------

console.log("\nVersion métodos max min");
const numMayorMenor = (n1, n2, n3) => {
  let numeros = [];

  n1 === n2 && n1 === n3
    ? console.log(`Los números ${n1}, ${n2} y ${n3} son iguales`)
    : numeros.push(n1, n2, n3);

  console.log(
    `El número mayor entre ${n1}, ${n2} y  ${n3} es : ${Math.max(
      ...numeros
    )}\nEl número menor entre ${n1}, ${n2} y  ${n3} es : ${Math.min(
      ...numeros
    )}`
  );
};

numMayorMenor(45, 3, 78);
