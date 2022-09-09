// Dado un texto y una busqueda, censurar todas las coinicidencias
// de la busqueda con la palabra [-CENSURADO-]

const censurar = (texto = false, busqueda = false) => {
  let resultado = "";

  if (!texto && !busqueda) {
    resultado = "No hay datos";
  } else if (!texto && busqueda) {
    resultado = "Falta el texto";
  } else if (texto && !busqueda) {
    resultado = "Falta la busqueda";
  } else if (texto && busqueda) {
    // para que la busqueda sea de forma globar se debe adicionar una expresion regular
    resultado = texto.replace( new RegExp(busqueda, 'gi'), "[-CENSURADO-]");
  }
  return resultado;
};

console.log (censurar("hola hola como estas hola desde hola", "hola"))
