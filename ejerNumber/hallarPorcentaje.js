// ¿Cuanto es el x% de x% número? Ejem: 20% de 100   devuelve 20


//------------mi version ---------------
const hallarPorcentaje = (porcentaje, total) => {
    let resultado = 0;
        const calculo = (porcentaje * total)/100
        resultado = calculo;
         
        console.log(`El ${porcentaje}% de ${ total} es : ${resultado}`);

}

hallarPorcentaje(15, 5000);

//------------- version Victor ---------------

function hallarProcentajeVic ( porcentaje, numero){
    let operacion = (numero * (porcentaje/100))
    let resultadoVic = `El ${porcentaje}% de ${ numero} es : ${operacion}`
    return resultadoVic;

}

 console.log(hallarProcentajeVic(43, 897));

 //----------------