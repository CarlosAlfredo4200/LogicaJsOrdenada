// Generar la siguiente pareja de enteros por consola

// 0  - 1
// 1  - 1
// 2  - 2
// 3  - 2
// 4  - 2
// 5  - 3
// 6  - 3
// 7  - 3
// 8  - 4
// 7  - 4
// 8  - 5
// 9  - 5

function seriePares(num) {
    let counter = 0;
    let numero = 1;
  
    for (let k = 0; k <= num; k++) {
      counter++;
      if (counter > 2) {
        numero += 1;
        counter = 1;
      }
      console.log(`${k} -  ${numero}`);
    }
  }
  
 // seriePares(9);

  //  ---------- Generar la siguiente terna de enteros por consola -----

//   1 -  1  - 1
//   2 -  1  - 2
//   3 -  1  - 3
//   4 -  2  - 1
//   5 -  2  - 2
//   6 -  2  - 3
//   7 -  3  - 1
//   8 -  3  - 2
//   9 -  3  - 3

function serieTernas(num) {
    let counter = 0;
    let numero = 1;
    let tercero = 0;
  
    for (let k = 1; k <= num; k++) {
      counter++;
      tercero++;
      if (counter > 2 && tercero > 3) {
        numero += 1;
        counter = 1;
        tercero = 1;
      }
      
      
      console.log(`${k} -  ${numero}  - ${tercero}`);
    }
  }
  
  serieTernas(9);
  