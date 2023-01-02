//Resuelvo PRUEBA TÉCNICA para PROGRAMADOR SEMI SENIOR | Add Two Numbers
//https://www.youtube.com/watch?v=eVSIgdQgJ-w&ab_channel=VidaMRR-Programacionweb

const a = [2, 4, 3];
const b = [5, 6, 4];
//output 7,0,8

let newA = "";
let newB = "";
const listaFinal = [];

function addTwoNumber(arrayA, arrayB) {
  for (let k = 0; k < arrayA.length; k++) {
    let caracter = arrayA[k].toString();
    newA = newA + caracter;
  }

  for (let k = 0; k < arrayB.length; k++) {
    let caracter = arrayB[k].toString();
    newB = newB + caracter;
  }
  const suma = parseInt(newA) + parseInt(newB);

  const newNumber = parseInt(suma.toString().split("").reverse().join(""));
  for (const carac of newNumber.toString()) {
    listaFinal.push(parseInt(carac));
  }

  //Métodos BigInt para convertir array en number para reemplazar los for
  const n1 = BigInt(arrayA.join(""));
  const n2 = BigInt(arrayB.join(""));
  const sumaN = n1 + n2;

  console.log(a);
  console.log(b);
  console.log(listaFinal);
  console.log(n1, n2);
  console.log(sumaN.toString().split("").reverse().join(""));
}

addTwoNumber(a, b);
