// Dividir un array en sub-arrays segun se indique por parametros

const dividirArray = (arrayPrincipal, numElementos) => {
  let arraglos = [];

  for (let elemento of arrayPrincipal) {
    let ultimo = arraglos[arraglos.length - 1];

    if (!ultimo || ultimo.length === numElementos) {
      arraglos.push([elemento]);
    } else {
      ultimo.push(elemento);
    }
  }
  console.log(arraglos);
};

dividirArray([7, 8, 9, 10, 5, 3, 4], 3);


 