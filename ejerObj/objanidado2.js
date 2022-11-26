const alumno0054 = {
  nombre: "Carlos",
  apellido: "Montoya",
  curso: "Programacion",

  notas: {
    n1: 8,
    n2: 8.75,
    n3: 7,
  },
  alias: "Sarco",
  intereses: ["matematicas", "técnologia", "computacion", "cine"],
  horario: "Mañana",
};

console.log(alumno0054.notas.n2);
console.log(alumno0054.intereses[2]);

function propedio() {
  let nota1 = alumno0054.notas.n1;
  let nota2 = alumno0054.notas.n2;
  let nota3 = alumno0054.notas.n3;

  let promedioAlum = (nota1 + nota2 + nota3) / 3;

  console.log("El promedio es ." + promedioAlum.toFixed(2));
}


propedio();
