// Dada una cadena de texto invertir el ordern sin utilizar reverse

// For of entrega el valor
// for in entrega el indice


//---------------Version victor-------
const cadena = "Carlos";
let cadenaInvertida = "";

const revertir = (cadena) => {
  for (let letra of cadena) {
    cadenaInvertida = letra + cadenaInvertida;
  }
  console.log(cadenaInvertida);
};
revertir("Carlos");

//--------------Version Jhon ---------------

function metodorReverse(cadena) {
  return cadena.split('').reverse().join('')
}
console.log(metodorReverse('Alfredo'));

//-----------------------------

const mReverse = (cadena) => console.log(cadena.split('').reverse().join(''));
mReverse('Montoya');

//----------version ndloen -----------

let resultadoinv = '';
const invertirHdLeon = (cadenaInv) => {


  for (let i = cadenaInv.length - 1; i >= 0; i--) {
    resultadoinv += cadenaInv[i];

  }
  console.log(resultadoinv);
}

invertirHdLeon('Andrea')
