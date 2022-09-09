// Dibujar un cuadrado con el tamaño indicado

const arribaAbajo = (numero) => {
  let lado = "";
  for (let k = 0; k < numero; k++) {
    lado += "*";
  }
  return lado;
};

function cuadrado(numero) {
  let dibujo = arribaAbajo(numero) + "\n";

  //Contenido centrar

  let contenido = "";
  for (let i = 2; i < numero; i++) {
    contenido = "*";

    for (let x = 2; x < numero; x++) {
      contenido += " ";
    }
    contenido += "*";

    dibujo += contenido + "\n";
  }

  dibujo += arribaAbajo(numero);
  return dibujo;
}
console.log(cuadrado(10));
