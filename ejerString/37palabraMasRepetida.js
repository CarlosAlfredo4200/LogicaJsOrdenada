// Dado un array o un texto devolver el elemento que mas se repite

const palabraMasRepetida = (cadena) => {
  let mapeo = {};

  let masFrecuente = "";

  let valorMayor = 0;

  if (typeof cadena === "string") {
    cadena = cadena.split(" ");
  }

  for (const elemento of cadena) {
    if (mapeo[elemento]) {
      mapeo[elemento]++;
    } else {
      mapeo[elemento] = 1;
    }
  }
  for (const elemento in mapeo) {
    if(mapeo[elemento] > valorMayor){
        valorMayor = mapeo[elemento];
        masFrecuente = elemento;
    }
 }

 console.log(valorMayor, masFrecuente);
};


 
palabraMasRepetida("Carlos Alfredo Carlos alfredo");
palabraMasRepetida([1,2,3,4,4,4]);
