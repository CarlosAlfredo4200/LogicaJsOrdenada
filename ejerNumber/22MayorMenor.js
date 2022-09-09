// Dados dos números indique cual es el mayor y el menor

const numMayor = (num1, num2) =>  (num1 > num2) 
? console.log(`El número ${num1} es mayor que ${num2}`)
: console.log(`El número ${num2} es mayor que ${num1}`)


numMayor(15, 6)

// ------------ Version victor --------------

const numeroMayor = ( numero1, numero2) => {

    
    if(numero1 === numero2) {
        
        console.log('Los números son iguales')
    }
    else if(numero1 > numero2){

        console.log(`El número ${numero1} es mayor que ${numero2}`)
    } 
    else {

        console.log(`El número ${numero2} es mayor que ${numero1}`)
    }
    
     
}

numeroMayor(3, 6)