// * Enunciado: Escribe una función que reciba dos palabras(String) y retorne verdadero o falso(Boolean) según sean o no anagramas.
//  * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
//  * NO hace falta comprobar que ambas palabras existan.
//  * Dos palabras exactamente iguales no son anagrama   Ejem. Frase – Fresa.

const anagrama = (cadena1, cadena2) => {

    (cadena1.toLowerCase().split('').sort() === cadena2.toLowerCase().split('').sort()) ? console.log('Las palabras son anagrama !!') : console.log('Las palabras son anagrama !!');



}

anagrama('Frase', 'Fresa')
anagrama('Cornisa', 'Narciso')