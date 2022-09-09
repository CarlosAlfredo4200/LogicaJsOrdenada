//Repetir un string las veces indicadas

const repetir = (cadena, numero) => {
  let repetir = (cadena + " ").repeat(numero);
  console.log(repetir);
};

repetir("Carlos", 3);

//-----------------------------------

const repetirV2 = (cadena, numero) => {
  nuevoString = "";
  for (let k = 0; k <= numero; k++) {
    nuevoString += cadena + " ";
  }
  console.log(nuevoString);
};

repetirV2("Alfredo", 5);

//------------Version victor Prototipo ----------------

String.prototype.repiteme = function (numero) {
  let resultado = "";

  for (let k = 0; k < numero; k++) {
    resultado += this + " ";
  }

  return resultado;
  console.log();
};

console.log("Andrea".repiteme(5));
