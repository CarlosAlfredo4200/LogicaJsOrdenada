// Dado un número crear escalera "-"

//--------------Forma directa -----------------------
const escalera = (numero) => {
   
  for (let k = 1; k <= numero; k++) {
    let escalones = "";
    for (let escalon = 1; escalon <= k; escalon++) {
      escalones += "[-]";
    }
    console.log(escalones);
  }
};
escalera(5);

//----------Forma extendida ----------------------

console.log('Forma extendida');
//--------------Forma directa -----------------------
const escaleraEx = (numero) => {
    let escaleraCompleta = "";
  
    for (let k = 1; k <= numero; k++) {
      let escalones = "";
      for (let escalon = 1; escalon <= k; escalon++) {
        escalones += "[-]";
      }
     escaleraCompleta += escalones + "\n"
    }

    return escaleraCompleta
  };
  console.log(escaleraEx(7))
  