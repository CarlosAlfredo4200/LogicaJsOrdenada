// Dado un Array de alumnos ( nombre y nota) mostrar cuales estan suspendidos
// y cuantos estan aprobados.

const datosAlumnos = [
  { name: "Carlos", nota: 5 },
  { name: "Alfredo", nota: 4 },
  { name: "Montoya", nota: 3 },
  { name: "Goez", nota: 2 },
  { name: "Andrea", nota: 3.8 },
];

const buscar = (datosAlumnos) => {
  for (let k = 0; k < datosAlumnos.length; k++) {
    if (datosAlumnos[k].nota >= 3) {
      console.log(`El alumno ${datosAlumnos[k].name} APROBO el curso`);
    } else {
      console.log(`El alumno ${datosAlumnos[k].name} REPROBO el curso`);
    }
  }
};
// buscar(datosAlumnos);


// -------------- Version Victor --------------

const suspendidos = [
    ["Victor", 10],
    ["Juan", 5],
    ["Pepe", 4],
    ["Maria", 8],
    ["Marta", 3],
]


function alumnosSuspendidos ( alumnos){

    let aprobados = 0, suspendidos = 0;

    for (const alumno of alumnos) {

        if(alumno[1] >= 5){
            aprobados++
        }
            suspendidos++
         
    }
    return {
        "Aprobados":aprobados,
        "Suspendidos": suspendidos

    }  
}

console.log( alumnosSuspendidos(suspendidos));