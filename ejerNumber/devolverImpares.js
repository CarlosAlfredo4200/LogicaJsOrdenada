// Dados dos números, dvolver cuantos impares hay entre ellos

//----------mi version -----------------------------
const listaNumeros = (inicio, final) => {
  let contador = 0;
  for (let k = inicio; k <= final; k++) {
    (k % 2 != 0) ? contador += 1 : '';
  }
  console.log(`Entre ${inicio} y ${final} hay ${contador} impares`);
  
};

//listaNumeros(1, 10);

//-----------Version Victor ----------------------

function impares (numero1, numero2){

    let contador = 0;
    while(numero1 < numero2){
        if(numero1 % 2 !== 0 ) contador++;
        numero1++
    }
    return contador
}
console.log(impares(1,10));
