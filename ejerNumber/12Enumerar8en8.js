// Dado un número mostrar todos los números desde el hasta 0 de 8 en 8

const disminuirNumero = (numero) => {
  console.log(`--Desde ${numero} hasta = 0 `);

  while (numero > 0) {
    numero -= 8;
    numero <= 0 ? console.log("--FIN--") : console.log(`--N° ${numero}`);
  }
};

disminuirNumero(100);
