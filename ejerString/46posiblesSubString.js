// Dado un string, devolver los posibles substring

function todosSubstring(cadena) {
    let substring =[];

    for (const letra in cadena) {
        let comienzo = parseInt(letra);

          for (let k = 0; k <=cadena.length - comienzo; k++) {
            //let final = k + comienzo;
            let final = (k * 1) + parseInt(comienzo);
           // console.log(comienzo, final);
           // console.log(cadena.substring(comienzo, final));

           substring.push(cadena.substring(comienzo, final))
            
          }
    }
    return substring.filter(e => e.length >= 1);
}


 console.log( todosSubstring("hola"));