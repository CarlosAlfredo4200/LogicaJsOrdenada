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

//------------Version Jhon Ortiz----------------

let saludo = "¡Hola!  ."
 function replicaString (cadena, num = 1) {
   return num < 1 ? "Nada " : new Array(num + 1).join(cadena);

 }

 console.log(replicaString(saludo, 5));
 console.log(replicaString(saludo, 0));

//Repetir caracter

//------------------------------

function repiteCaracter(cadena) {
  
  let newCadena = cadena.split('');
  let result = ''
  for (let k = 0; k < newCadena.length; k++) {
   result +=newCadena[k] + newCadena[k]
    
  }
  console.log(result);
   
}

repiteCaracter("Hola")
