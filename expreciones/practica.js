const remplazarTexto = ( cadena, letra ) =>{
     let exp = /carlos/gi
   // const res =  cadena.replace(new RegExp(letra, 'gi'), "[-CENSURADO-]");
    const res =  cadena.replace(exp, "[-CENSURADO-]");
    console.log(res);


    const reg1 = /\dA/i
    const str = "Jav5ascript"
    const newStr = str.replace(reg1,"--");

    console.log(newStr);

}

remplazarTexto('carlos alfredo montoya carlos CARLOS', 'carlos' );


//  .replace(/[^\w]/gi, '')
// replace(/[,.!¡]/gi, "");


//--- ---- ---- ---- 

let cadena = "Para más información, vea Capítulo 3.4.5.1";
let expresion = /(capítulo \d+(\.\d)*)/i;
let hallado = cadena.match(expresion);
console.log(hallado);