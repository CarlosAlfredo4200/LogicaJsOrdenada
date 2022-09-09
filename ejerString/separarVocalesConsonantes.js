
let vocal = [];
let palabra = ''
let consonantes = [];

const separar = ( cadena) => {

    let coincidencias = cadena.match(/[aeiou]/gi)
    
    for (const k of cadena) {
        if(coincidencias.indexOf(k)!== -1){
            vocal.push(k)
            
        }
        else{
            consonantes.push(k)
        }
    }
}
separar('mursielago libre')
console.log(vocal);
console.log(consonantes);


 