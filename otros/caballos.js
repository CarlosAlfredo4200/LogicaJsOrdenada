 /*        2. El caballo de mac es más oscuro que el de Smith pero mas rapido y mas viejo que el de Jack,
que es aún más lento que el de Willy, que es más joven que el de Mack, que es mas viejo que el de Smith, 
que es más claro que  el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith.
 ¿Cuál es el más viejo, el más lento y cuál es más claro?.

Caballos	Nivel color	Nivel de velocidad	Nivel edad

 Mac		4		4			4
Smith		3		3			2
Jack		4		2			3
Willy 		4		3			3

Más viejo Mac
Más lento Jack
Más claro Smith
 
*/
let caballos ={
    Mac:{edad:0, velocidad:0, color:0},
    Smith:{edad:0, velocidad:0, color:0},
    Jack:{edad:0, velocidad:0, color:0},
    Willy:{edad:0, velocidad:0, color:0},

    resultado:function(){
        if(caballos.Mac.color > caballos.Smith.color &&
           caballos.Mac.velocidad > caballos.Jack.velocidad &&
           caballos.Mac.edad > caballos.Jack.edad &&
           caballos.Jack.velocidad < caballos.Willy.velocidad &&
           caballos.Mac.edad > caballos.Willy.edad &&
           caballos.Willy.color > caballos.Smith.color &&
           caballos.Jack.velocidad < caballos.Smith.velocidad &&
           caballos.Jack.color > caballos.Smith.color
           ){
               return true;
           }else{
               return false;
           }
    },

    intervalo: setInterval(function(){

       caballos.Mac.color = Math.ceil(Math.random()*2);
       caballos.Mac.velocidad= Math.ceil(Math.random()*2);
       caballos.Mac.edad = Math.ceil(Math.random()*2);

       caballos.Smith.color = Math.ceil(Math.random()*2);
       caballos.Smith.velocidad= Math.ceil(Math.random()*2);
       caballos.Smith.edad = Math.ceil(Math.random()*2);
       
       caballos.Jack.color = Math.ceil(Math.random()*2);
       caballos.Jack.velocidad= Math.ceil(Math.random()*2);
       caballos.Jack.edad = Math.ceil(Math.random()*2);
       
       caballos.Willy.color = Math.ceil(Math.random()*2);
       caballos.Willy.velocidad= Math.ceil(Math.random()*2);
       caballos.Willy.edad = Math.ceil(Math.random()*2);


     if (caballos.resultado()){
         clearInterval(caballos.intervalo);

         console.log("Caballo Mac", caballos.Mac );
         console.log("Caballo Smith", caballos.Smith );
         console.log("Caballo Jack", caballos.Jack );
         console.log("Caballo Willy", caballos.Willy);
     }
    },1)

}
