// Dado un número devolver la tabla de multiplicacion completa
// ----------MI version----------
const tablaMultiplicar = ( numero ) =>{
    for(let k = 0; k<= 10; k ++ ){
        console.log(numero * k);
    }
};

//tablaMultiplicar(4);

//------------Version Victor --------------

const tablaMultiplicarVictor = ( numero ) =>{
     
    for(let i = 0; i<= 10; i ++ ){
      let multipli = (i * numero );
      console.log(`${numero} X ${i} = ${multipli}`);
};

}

tablaMultiplicarVictor(4)

//-----------------------------------------


