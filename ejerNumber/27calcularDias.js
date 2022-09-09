//Dado un número calcular a cuantos dias, meses ,años equivale.

const calcular = (numero) => {
//     // Total sobre el número
//    let años = Math.floor(numero / 365);
//    let meses = Math.floor(numero / 31);
//    let semanas = Math.floor(numero / 7);
//    
//    
//    //console.log(años.toFixed(1));
//    //console.log(meses.toFixed(1));
//    //console.log(semanas.toFixed(1));
//
//    console.log('Número de años : '+ años);
//    console.log('Número de meses : '+ meses);
//    console.log('Número de semanas : ' + semanas);
    
    //--------------Si fuese sobre lo que se ha vivido-----------
    
    let añosv = Math.floor(numero / 365);
    
    let diasRestantes = (numero%365);
    let mesesv = Math.floor(diasRestantes / 30);
    let diasRestantesDelMes = (diasRestantes % 30);

    
    console.log('Número de años vividos: '+ añosv);
    console.log('Número de meses vividos: '+ mesesv);
    console.log('Número de días vividos: '+ diasRestantesDelMes);
     
    
}
 
 calcular(920)