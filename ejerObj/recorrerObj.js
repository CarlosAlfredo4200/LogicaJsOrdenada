// ----- Como recorrer Objetos -----------

const persona = {
    nombre: 'Carlos',
    apellido: 'Montoya',
    edad: '43'
}

// ---- hasOwnProperty puede generar mucho estres ----
for (const key in persona) {

    if (Object.hasOwnProperty.call(persona, key)) {
        const element = persona[key];
        console.log(element);
    }
}

// --- En ES6 y ES8 agregaron métodos estaticos de objetos. Convierten mas propiedades de obj en matriz,
//     utilizando asi los metodos de las matrices. 
//         Object.keys();
//         Object.values();
//         Object.entries();
// ----

// ------------------------ Keys()------------------------------------------

const newObjPersona = Object.keys(persona);
newObjPersona.forEach((data) => {
    console.log(`Los datos son ${persona[data]} ${data}`);
})
console.log(newObjPersona);

// --- Sumar valores array obj ----


const generos = {
    femenino: 5,
    masculino: 8
}

let totalGeneros = 0;
const newGeneros = Object.keys(generos);
newGeneros.forEach((genero) =>{
    totalGeneros += generos[genero];
})

console.log(totalGeneros);

// ------------------------ values()------------------------------------------

newValuePersona = Object.values(persona);
console.log(newValuePersona);

newValuePersona.forEach((data) => console.log(data));


// ------------------------ estries()   matriz de matrices----------------------


const newEstriesPersona = Object.entries(persona);
console.log(newEstriesPersona);

// ---- Destructurar matriz ----

for (const [key, value] of newEstriesPersona) {
    console.log(key);
    console.log(value);
}
