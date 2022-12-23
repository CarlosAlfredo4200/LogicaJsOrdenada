//imprimir con ciclos

// 0   1
// 1   1
// 2   2
// 3   2
// 4   3
// 5   3
// 6   4
// 7   4
// 8   5
// 9   5

let numero = 1;
for (let n = 0; n <9; n++) {
    console.log(numero);
    numero = n + numero -1;
}