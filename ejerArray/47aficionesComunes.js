// Dado un array de objetos devolver cuales son las aficiones mas 
// comunes de los usuarios.

// Ejem: { informatica: 6, cine: 7, futbol: 2, videoJuegos: 1}

const usuarios = [
    { nombre: 'Victor', aficiones:["Informatica", "cine", "videojuegos"]},
    { nombre: 'Juan', aficiones:["futbol", "cine", "tenis"]},
    { nombre: 'Andrea', aficiones:["Informatica", "cine", "surf"]},
    { nombre: 'Joel', aficiones:["Informatica", "cine", "videojuegos", "futbol", "surf"]},

];


  function aficiones( arrayObj) {
    let mapeo = {};
    // // -- Forma con forEach  --
    //     arrayObj.forEach(e => {
    //         console.log(e);
    //     });

    for (const e of arrayObj) {
          
        for (const aficion of e.aficiones) {
            if( !mapeo[aficion]) {
                mapeo[aficion] = 1;
            }
            else{
                mapeo[aficion]++;
            }
           
        }
    }
    console.log(mapeo);
}

aficiones(usuarios)