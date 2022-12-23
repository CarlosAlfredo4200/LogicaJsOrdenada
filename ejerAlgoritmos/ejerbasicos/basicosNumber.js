// leer un num entero y mostrar todos los enteros comprendidos entre 1 y el nùmero

function listaEnteros(num) {
  console.log("Numero enteros desde 1 hasta en # ingresado");
  for (let k = 1; k <= num; k++) {
    console.log(`Ciclo N° ${k}`);
  }

  //Recibir número, mostrar desde 1 hasta el número solo los pares
  console.log(`\nPares`);
  for (let p = 1; p <= num; p++) {
    if (p % 2 === 0) {
      console.log(`Ciclo N° ${p}`);
    }
  }

  //Recibir número, mostrar desde 1 hasta el número solo los terminados el 4
  console.log(`\nQue ternime en 4`); //pag 227

  for (let t = 1; t <= num; t++) {
    t.toString().slice(-1) === "4" ? console.log(t) : "";
  }
}

listaEnteros(10);

//Recibir número de  3 digitos, mostrar desde 1 hasta el número solo los enteros
// comprendidos entre 1 y cada uno de los digitos

console.log("\nNúmero de 3 digitos dividido");
const numTresDigitos = (num) => {
  const dig = num.toString().split("");
  const indice0 = [];
  const indice1 = [];
  const indice2 = [];

  for (let index = 1; index <= dig[0]; index++) {
    indice0.push(index);
  }
  for (let index = 1; index <= dig[1]; index++) {
    indice1.push(index);
  }
  for (let index = 1; index <= dig[2]; index++) {
    indice2.push(index);
  }
  console.log(`Número ingresado ${num}`);
  console.log(`${dig[0]} = ${indice0}`);
  console.log(`${dig[1]} = ${indice1}`);
  console.log(`${dig[2]} = ${indice2}`);
};
numTresDigitos(333);

//Leer número entero, suma de todos los enteros desde 1 hasta el número

const sumaEnteros = (num) => {
  console.log(
    "\nLeer número entero, suma de todos los enteros desde 1 hasta el número"
  );

  let suma = 0;
  for (let k = num; k >= 0; k--) {
    suma += k;
  }
  console.log(suma);
};

sumaEnteros(5);

  
 