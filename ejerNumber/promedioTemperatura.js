// En el valle de aburra afronta altas temperaturas año tras año. 
// crear una funcion que calcule latemperatua media de la tierra desde la toma de 
// 20 registros diarios de temperatura;


let contador = 0;
let datosdiarios = [];
let sumaIngresos = 0;
 
let min = 0;
let max = 0;

const promediotemperatura = () => {
    
     

    while (contador < 5) {

        ingreso = parseFloat(prompt('Ingrese el dato de teperatura: '))
        contador += 1;
        datosdiarios.push(ingreso)
        sumaIngresos += ingreso 
    }

    datosdiarios.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
     })

     
     console.log(datosdiarios);
     

    
    min = Math.min(...datosdiarios);
    max = Math.max(...datosdiarios);
    
    
    let temperaturaMedia = (min   + max);
    let mediaDia = temperaturaMedia / 2;
    let mediaGeneral =  sumaIngresos / contador
    
    
    
    console.log(min);
    console.log(max);
    console.log(contador);
     
     
    console.log(`La temperatura media de la ciudad es: ${mediaDia.toFixed(2)}`);
    console.log(`La temperatura media deneral de la cidad es: ${ mediaGeneral.toFixed(2)}`);
    

}

promediotemperatura()


