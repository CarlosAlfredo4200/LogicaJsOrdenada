function Persona(pNombre, pApellido, pEdad) {
    
    this.nombre = pNombre
    this.apellido = pApellido
    this.edad = pEdad
}

let carlos = new Persona('Carlos', 'Montoya', 44);
let andrea = new Persona('Andrea', 'Montoya', 13);

//Métodos

Persona.prototype.saludar1 = function(){ console.log(`Hola soy ${this.nombre}, ${this.apellido}`);}
Persona.prototype.saludar2 = () => { console.log(`Hola soy ${this.nombre}, ${this.apellido}`);}
console.table([carlos, andrea]);

Persona.prototype.soyMayor = function(){
    if(this.edad > 18){
        console.log(`${this.nombre} es mayor de edad`);
    }else{
        console.log(`${this.nombre} es menor de edad`);

    }
}

carlos.apellido = "Montoya Góez"

console.table([carlos, andrea]);

carlos.saludar1();
andrea.saludar2();

carlos.soyMayor();
andrea.soyMayor();
