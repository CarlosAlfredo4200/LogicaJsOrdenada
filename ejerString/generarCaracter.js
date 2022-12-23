// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter,
// retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».
const generarCaracter = (num, caracter) => {
    let res = "";
    for (let k = 0; k <= num; k++) {
      res += caracter;
    }
    console.log(res);
  };
  generarCaracter(5, "*");
  