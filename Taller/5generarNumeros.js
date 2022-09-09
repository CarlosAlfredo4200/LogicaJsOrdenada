// 5.  Genera unos números. 
//     Cuente los que terminan en un digito leido.
//     sume los mayores de 340 y menores de 960.

//-- Generar numeros ---

 

    //let numeroIngresaro = prompt('Ingrese el número :')    
    const cantidadNumeros = 5;
    let arrayNumeros = [];
    let contadorLimites = 0;
    let numeroDigitoLeido = 0

    const numIng = 3

    // Ciclo para generar los números
    for (let k = 0; k < cantidadNumeros; k++) {
        let NumRandom = (Math.round(Math.random()*1000)) // Número aleatorio entre cero y 1000
        arrayNumeros.push(NumRandom)   
    }

    // Ciclo para hallar el ultimo digito de cada número
    for (const i of arrayNumeros) {

        let ultimoDigito =i.toString().split('').pop().valueOf()
        
        if(ultimoDigito == numIng){
            numeroDigitoLeido += 1
        }
    }
    // Cliclo para sumar los numero entre limites
    for (const numero of arrayNumeros) {
            if(numero > 340 && numero < 960){
                contadorLimites = contadorLimites + numero
            }

    }

    // Imprima
    console.log(arrayNumeros);
    console.log('La suma de los números entre los limites :'+contadorLimites);
    console.log('Número leido :'+numeroDigitoLeido);


 