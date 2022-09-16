const persona = {
    nombre: 'Carlos',
    apellido:'Montoya',
    edad:44
}

const newPersona = Object.keys(persona);
    newPersona.map( key =>{
        console.log(key);
    })

    console.log(newPersona);