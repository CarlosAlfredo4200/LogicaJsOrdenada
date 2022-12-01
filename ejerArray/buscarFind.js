// Find busca la primera que cumpla la condicion

const cities = ["Medellín","Bogotá","Cali", "Cartagena"];

const busqueda = cities.find( ciudad => {
    console.log( ciudad);
    
    //return ciudad ==="Cali";
    return ciudad.length > 4;
});

console.log( "Se encontro la ciudad de :"+busqueda);