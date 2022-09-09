// Dado un numero, inviertelo y devuelve de nuevo el entero

//--------------mi version -----------------------------
const invertirNumero = (numero) => {
  let newNumero = "";

  let invertir = numero.toString();
  
  for (let digito of invertir) {
    newNumero = digito + newNumero;
  }
  console.log(newNumero);
};

//invertirNumero(456);

//-----------Version Victor --------------------------

function invertirNum (numero) {

    let invertido = parseInt(numero
      .toString()
      .split('')
      .reverse()
      .join(''))
       * Math.sign(numero);
     
      console.log(invertido);
      return invertido
    }
    
invertirNum(-456)
