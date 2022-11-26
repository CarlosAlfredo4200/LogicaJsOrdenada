/* 
 3. Cuatro perros:
 Tenemos 4 perros,un galgo, un dogo, un alano, un podenco. Este ultimo come mas que el galgo; el alano come 
 mas que el galgo y menos que el dogo, pero éste come mas que el podenco.¿Cúal de los 4 perros  come menos?


 dogo > podanco
 dogo > alano
 alano > galgo
 podanco > galgo
 
 

 el perro que menos come es ? el galgo
 
 */


 let perro = {

    dogo:0,
    alano:0,
    galgo:0,
    podanco:0,

    resultado: function(){
        if (perro.dogo > perro.podanco &&
            perro.dogo > perro.alano &&
            perro.alano > perro.galgo &&
            perro.podanco > perro.galgo){
            return true;
        }else{
            return false;
        }
    },

    intervalo: setInterval(function(){

          perro.dogo = Math.ceil(Math.random()*4);
          perro.alano = Math.ceil(Math.random()*4);
          perro.galgo = Math.ceil(Math.random()*4);
          perro.podanco = Math.ceil(Math.random()*4);

        if(perro.resultado()){
            clearInterval(perro.intervalo);

            console.log("Raza Dogo", perro.dogo);
            console.log("Raza alano", perro.alano);
            console.log("Raza galgo", perro.galgo);
            console.log("Raza podanco", perro.podanco);
        }
         
    },1)
}