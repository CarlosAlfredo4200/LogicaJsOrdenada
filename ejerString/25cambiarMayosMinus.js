// Dado un String cambiar a mayusculas o minusculas dependiendo del numero mayor encontroado en el Texto.

// let letras="abcdefghyjklmnñopqrstuvwxyz" = /[a-z]/.text;

const mayusculasMinusculas = (cadena) => {
  let mayusculas = 0;
  let minusculas = 0;

  for (let k = 0; k < cadena.length; k++) {
    if (/[A-Z]/.test(cadena[k])) {
      mayusculas += 1;
    } else {
      minusculas += 1;
    }
  }

  if (mayusculas === minusculas) {
    console.log(cadena);
  } else {
    mayusculas > minusculas
      ? console.log(cadena.toUpperCase())
      : console.log(cadena.toLowerCase());
  }

  console.log('Mayusculas :'+mayusculas);
  console.log('Minusculas :'+minusculas);
};

mayusculasMinusculas("CaRloS");
