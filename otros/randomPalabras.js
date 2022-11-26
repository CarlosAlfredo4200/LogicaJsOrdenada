function random_palabras(){
    let ran='';
    let palabras = ['Moto','Avión','Coche'];
    for(let k=0; k<=palabras.length;k++){
        ran+=palabras[Math.ceil(Math.random()*palabras.length)];
        console.log(ran);
        
    }
    return palabras;
}

console.log(random_palabras())