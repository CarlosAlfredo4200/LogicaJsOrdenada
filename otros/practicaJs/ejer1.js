// Un joven gana loteria.Hace fiesta.
// .Solo mayores de edad
// .La primera persona desdes de las 2am No paga.


let free = false;

const validarClente = (time) => {
    
    let edad = prompt("Ingres la edad:");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free === false) {
            alert("Entrada gratis primera persona despues de las 2am");
            free = true;
        }
        else {
            alert(`son las ${time}:00hs Puedes ingresar pero parar el cover`)
        }
    }
    else {
        alert("Eres menor de edad no puedes Ingresar")
    }
}


validarClente(1)
validarClente(2)
validarClente(3)