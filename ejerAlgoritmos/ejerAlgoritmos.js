//Adquirir una revista

const revistas = ["Deportes", "Música", "Cosina"];

function comprarRevista() {
    
    if(revistas.includes("Deporte")){
        console.log("si");
    }else{
        console.log("No");
    };

}

comprarRevista()