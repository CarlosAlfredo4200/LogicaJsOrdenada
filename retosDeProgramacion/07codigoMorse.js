// * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
//  * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
//  * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
//  * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.

const morse = {
    A : ".—", 
    B : "—...", 
    C : "—.—.", 
    CH: "————", 
    D : "—..", 
    E : ".",  
    F : "..—.",
    G : "——.", 
    H : "....", 
    I : "..",  
    J : ".———", 
    K : "—.—",  
    L : ".—..", 
    M : "——",   
    Ñ : "——.——",
    O : "———",
    P : ".——.",
    Q : "——.—",
    R : ".—.",
    S : "...",
    T : "—",
    U : "..—",
    V : "...—",
    W : ".——",
    X : "—..—",
    Y : "—.——",
    Z : "——..",
    0 : "—————",
    1 : ".————",
    2 : "..———",
    3 : "...——",
    4 : "....—",
    5 : ".....",
    6 : "—....",
    7 : "——...",
    8 : "———..",
    9 : "————.",
    "." : ".—.—.—",
    "," : "——..——",
    "?" : "..——..",
    " " : "__ __ "
}

const cambiarMorse = ( cadena ) => {

    let cambioMayusculas = cadena.toUpperCase();
    let versionMorse = '';
    
    for (let letra = 0; letra < cambioMayusculas.length; letra++) {

        let newLetra = cambioMayusculas[letra];
       
        const newEstriesMorse = Object.entries(morse);

        for (const [key, value] of newEstriesMorse) {

            if (key === newLetra) {
                versionMorse += value;
            }
        }
    }
    console.log(versionMorse);

   


    
}

cambiarMorse ( 'a b c')