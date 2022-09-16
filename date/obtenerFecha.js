let hoy = new Date();
console.log(hoy);

let fecha = new Date('2022-09-16T21:27:38.427Z');
console.log(fecha);

let dia = new Date().getDate();
let mes = new Date().getMonth();
let año = new Date().getFullYear();
let utc = new Date().getUTCDate();
 

//---- Calculos entre tiempo transcurrido ----
function calculos() {
    
    let tiempoInicial = Date.now();
    
    setTimeout(() => {
        let tiempoFinal = Date.now();
        
        let transcurrido = (tiempoFinal - tiempoInicial);
        let segundos = (transcurrido * (1/1000)).toFixed(1);
        console.log('Tiempo transcurrido : '+ segundos);
    }, 2000);

    
}

calculos()

console.log(dia);
console.log(mes);
console.log(año);
console.log(utc);

//--- crear fechas a partir de un string ---

let cadenaFecha = 'Julio 9 , 1978'

let fech = new Date(cadenaFecha);
let fechDia = fech.setMonth(1);
let fechMes = fech.setMonth(0);
let fechAño = fech.setFullYear(2);

console.log(fech);
console.log(fechDia);
console.log(fechMes);
console.log(fechAño);