/*1. De 4 corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, 
y D ha llegado en medio de A y C. ¿Podrías calcular el orden de llegada?

--------x >  Y   x llegó primero que y

Crear una variable de  objeto que contenga las 4 respuestas:
(Objeto conjunto de propiedades y métodos separados por comas).
*/

// Variable de objeto atleta
let atleta = {

    // propiedades como corredores
    A:0,
    B:0,
    C:0,
    D:0,

    // Método resultado del algoritmo con función
    resultado: function(){

        if (atleta.C > atleta.B &&
            atleta.D > atleta.B &&
            atleta.D > atleta.C &&
            atleta.D < atleta.A )
            {
                return true;

            }else{
                return false;

            }
    },


    /*Se crea una propiedad   SetInterval para que se generen los ciclos de llegada,
     cada 10 mili se repetira hasta que se cumpla el caso que Resultado sea igual a true. 
     SetInterval se construye con 2 parametros (función y tiempo 10 milisegundos)
*/
    intervalo: setInterval(function(){

        atleta.A = Math.ceil(Math.random()*4)
        atleta.B = Math.ceil(Math.random()*4)
        atleta.C = Math.ceil(Math.random()*4)
        atleta.D = Math.ceil(Math.random()*4)

// Si encuentra el caso correcto con ClearInterval se detiene la iteración y se imprime
        if (atleta.resultado()){
            clearInterval(atleta.intervalo);

            console.log("Atleta A", atleta.A )
            console.log("Atleta B", atleta.B )
            console.log("Atleta C", atleta.C )
            console.log("Atleta D", atleta.D)
        }
    },10)
 }

