/*
Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos utilizar diferentes medios de transporte;
sabemos que alejandro NO utiliza coche ya que éste acompaña a Benito que no va en avión.Andrés viaja en Avión. 
Si Carlos No va acompañado de Dario ni hace uso del avión, podria Vd.¿En que medio de transporte llega Tomas?

Nombres     Transporte

Alejandro   1 Moto
Benito      1 Moto
Andrés      2 Avión
Carlos      3 coche
Dario       2 Avión
Tomas       3 coche

Tomas viaja en coche

*/

let transporte = {
    Alejandro:0,
    Andrés:0,
    Carlos:0,
    Dario:0,
    Tomas:0,
    Benito:0,

    resultado: function(){

        if(transporte.Alejandro =="Moto" &&
            transporte.Benito =="Moto" &&
            transporte.Andrés =="Avión" &&
            transporte.Carlos =="coche" &&
            transporte.Dario =="Avión" &&
            transporte.Tomas =="coche"){
                return true;
        }else{
            return false;
        }
    },

    intervalo: setInterval(function(){


            transporte.Alejandro = "Moto";
            transporte.Andrés = "Avión";
            transporte.Carlos = "coche";
            transporte.Dario = "Avión";
            transporte.Tomas = "coche";
            transporte.Benito = "Moto";

        if(transporte.resultado()){
            clearInterval(transporte.intervalo);

            console.log("Alejandro se transporta en: ",transporte.Alejandro);
            console.log("Andrés se transporta en: ",transporte.Andrés);
            console.log("Carlos se transporta en: ",transporte.Carlos);
            console.log("Dario se transporta en: ",transporte.Dario);
            console.log("Tomas se transporta en: ",transporte.Tomas);
            console.log("Benito se transporta en: ",transporte.Benito);

        }
    },1)
}