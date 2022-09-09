const convertirRomano = (num) => {
  const unidadRomano = [
    " ",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  const decenaRomano = [
    " ",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
  ];
  const centenaRomano = [
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
  ];
  const uniMilRomano = ["M", "MM", "MMM", "IV", "V", "VI", "VII", "VIII", "IX"];

  let unidad = "";
  let decena = "";
  let centena = "";
  let uniMil = "";

  let divNum = num.toString().split("").reverse();

  for (let index = 0; index < divNum.length; index++) {
    if (index == 0) {
      unidad = unidadRomano[divNum[index]];
    }
    if (index == 1) {
      decena = decenaRomano[divNum[index]];
    }
    if (index == 2) {
      centena = centenaRomano[divNum[index] - 1];
    }
    if (index == 3) {
      uniMil = uniMilRomano[divNum[index] - 1];
    }
  }

  console.log(uniMil + centena + decena + unidad);
};

convertirRomano(9);
