// * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
//  * Hecho esto, imprime los números primos entre 1 y 100.

function numeroPrimo(num) {
    
    let resultado = 0;
    
    for (let index = 2; index <=num; index++) {
        let contador =0;
        
        // didivir el index porcada número anterior a el hasta 2

        for (let k = index; k >= 2; k--) {
        
        // Si lo divide exacto lo cuente
            if (index % k === 0) {
                contador++
            }
        }

        if (contador  > 1) {
            resultado =  index 
        } else {
            
            resultado = `${index} Es primo ` 
        }

        console.log(resultado);
    }
  
}
numeroPrimo( 100)