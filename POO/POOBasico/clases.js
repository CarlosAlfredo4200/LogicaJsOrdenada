 
class Persona{

    constructor(pNombre, pApellido, pEdad) {
    
        this.nombre = pNombre
        this.apellido = pApellido
        this.edad = pEdad
    }

    //Métodos
    saludar1(){
        console.log(`Hola soy ${this.nombre}, ${this.apellido}`)
    }
}
 
//Herencia

class Programador extends Persona{

    constructor(pNombre, pApellido, pEdad, pIngles){
        super(pNombre, pApellido, pEdad, pIngles)
        this.sabeIngles = pIngles;

    }
        
    //Sobre escritura reemplaza 
    saludar1(){
        console.log(`Hola soy ${this.nombre}, ${this.apellido} soy un programador`);

        if(this.sabeIngles){
            console.log("Domino el ingles");
        }else{
            console.log("No domino el ingles");

        }
    }

    
}


let carlos = new Persona('Carlos', 'Montoya', 44);
let andrea = new Persona('Andrea', 'Montoya', 13);
let dev = new Programador('Juan','Montoya',18, false);


console.table([carlos, andrea, dev]);
carlos.saludar1();
andrea.saludar1();


dev.saludar1();
 
 
 
 
