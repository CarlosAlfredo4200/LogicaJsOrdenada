// Dada una cadena de texto devolver cuantas vocales tiene

const vocales = ( cadena ) => {

    let coincidencias = cadena.match(/[aeiou]/gi)
    let texto = cadena;
    console.log(`La frase es :${texto}`);
        return  coincidencias?  coincidencias.length : 0;
}
 
console.log('N° de vocales :',vocales('murienagoei'));


