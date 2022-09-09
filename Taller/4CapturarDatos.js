 // Capture varios datos con: código, nombre, edad, sexo y estatura. Seleccione las mujeres
// solteras con estatura no mayor que 1.79. Imprima la edad promedio de los hombres casados.

let mujerSoltera = 0;
let hombreCasado = 0;
let edadHombreIng = 0;
let edadesHombre = 0;
let estado = "";
let promedioEdadHombres = 0;
let codigo = 0;

//------ Inicio pido código --------
codigo = parseInt(prompt("Ingrese código :"));

//Inicio ciclo
while (codigo !== 0) {
  nombre = prompt("Ingrese nombre :");
  let sexo = prompt("Ingrese sexo :");

  if (sexo === "f") {
    estado = prompt("Estado civil ? :");

    if (estado === "soltera") {
        estatura = parseFloat(prompt("Ingrese la estatura :"));
         if (estatura < 1.79) {
          mujerSoltera = mujerSoltera + 1;
          codigo = parseInt(prompt("Ingrese código :"));
         }
    }
    else{
      codigo = parseInt(prompt("Ingrese código :"));
    }
    
        
  } else {
    estado = prompt("Estado civil ? :");
    if (estado === "casado") {
      edadHombreIng = parseInt(prompt("Ingrese edad :"));
      hombreCasado = hombreCasado + 1;
      edadesHombre = edadesHombre + edadHombreIng;
      codigo = parseInt(prompt("Ingrese código :"));
    }
    else{
      codigo = parseInt(prompt("Ingrese código :"));
    }
  }
}

//---- Fin ciclo mientras -----

promedioEdadHombres = edadesHombre / hombreCasado;

//----- Imprima ------------------
console.log("Promedio edad hombres" + promedioEdadHombres);
console.log("Número de mujeres solteras" + mujerSoltera);
