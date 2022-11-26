//EJERCICIO 1
// Implementar la función objContains: debe buscar dentro de un objeto anidado un par {clave: valor}
// especifico. Tanto el objeto como el nombre de la propiedad y su valor serán recibidos por parámetro.
// En el caso de que encuentre el valor indicado en cualquier nivel del objeto debe devolver true,
// de lo contrario, devolver false.
// Aclaraciones:
//   - Un objeto anidado es un objeto que dentro tiene uno o más objetos.
//     Ej:
       const user = {
           id: 6,
           email: 'homero@maxpower.com',
           infoPersonal: {
               nombre: 'Homero Simpson',
               direccion: {
                   calle: 'Avenida Siempreviva',
                   numero: 742,
                   barrio: 'Springfield',
                   estado: 'Massachusetts'
               }
           }
       }
//   - Caso que devuelve true  --> objContains(user, "barrio", "Springfield");
//   - Caso que devuelve false --> objContains(user, "empleo", "Empleado en planta nuclear");
// Pista: utilizar typeof para determinar si el valor de una propiedad es un objeto para aplicar
// allí la recursión


 
function objContains(obj, prop, value) {

    newUser = Object.entries(obj);
     for (const [key, value] of newUser) {

             if(typeof(value) ==="object"){
                
                 objInterno = Object.entries(value);
                for (const [key, value] of objInterno) {
                    
                   if(typeof(value) === 'object'){

                    direccionData = Object.entries(value);
                    for (const [key, value] of direccionData) {
                        console.log(key,":",value);
                         
                    }
                   }
                    
                }
                 
                }else{
               
             }
     }
     
        
    //  for (const [key, value] of newUser) {

    //     if(key === prop && value === value){
    //         console.log('bien');
    //     }else{
    //         console.log('No esta');

    //     }
        
     }
        
    
    
    

objContains(user, "estado", "Massachusetts" )