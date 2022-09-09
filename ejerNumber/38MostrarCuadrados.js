// Dado un numero mostrar listado de cuadrdados
// de todos los numeros naturales hasta llegar al mismo

const mostrarCuadrdados = (num) => {
    
    for (let k = 0; k <=num; k++) {
        
        
        console.log(`El cuadrado de ${k} es :`,  k * k);
        
    }
}

mostrarCuadrdados(10)