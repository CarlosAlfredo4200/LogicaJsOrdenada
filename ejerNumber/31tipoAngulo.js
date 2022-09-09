// Dado un numero indica que tipo de angulo es:
//  0 a 90 agudo
//  90 Recto 
//  > 90 < 180 obtuso

//  180 llano

//  > 180 < 360 còncavo
//  260 completo


const hallarAngulo = (numero) =>{

    
    if (!numero) return console.warn("no ingresarte ningun número");
    if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, No es un número`);
    if (Math.sign(numero) === -1) return console.error("el numero de veces no pude ser negativo");

    if (numero > 0 && numero < 90 ) {
            console.log('El angulo es Agudo'); 
        } else if(numero === 90) {
            console.log('El angulo es Recto'); 
            
        }else if(numero > 90 && numero < 180){
            console.log('El angulo es Obtuso'); 
            
        }else if(numero === 180){
            console.log('El angulo es llano'); 
            
        }else if(numero > 180 && numero < 360){
            console.log('El angulo es Cóncavo'); 
            
        }else{
            console.log('El angulo es Completo'); 

        }
    
    
}

hallarAngulo(-11)