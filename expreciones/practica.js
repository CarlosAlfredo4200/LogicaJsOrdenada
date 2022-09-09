const remplazarTexto = ( cadena, letra ) =>{
     let car = 'CARLOS'
    const res =  cadena.replace(  /${letra}/gi, "[-CENSURADO-]");
    console.log(res);


    const reg1 = /\dA/i
    const str = "Jav5ascript"
    const newStr = str.replace(reg1,"--");

    console.log(newStr);

}

remplazarTexto('carlos alfredo montoya carlos CARLOS', 'carlos' );


//  .replace(/[^\w]/gi, '')
// replace(/[,.!¡]/gi, "");