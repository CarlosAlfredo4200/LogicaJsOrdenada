// * Enunciado: Crea una función que reciba dos cadenas como parámetro(str1, str2) e imprima otras dos cadenas como salida(out1, out2).
//  * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
//  * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.


const nuevasCadenas = (a, b) => {

    let salida1 = []; // cs
    let salida2 = []; // fed


    for (let k = 0; k < a.length; k++) {

        if (!b.includes(a[k])) {
            salida1.push(a[k])
        }
    }
    for (let i = 0; i < b.length; i++) {

        if (!a.includes(b[i])) {
            salida2.push(b[i])
        }
    }

    console.log('Resultado 1 :' + salida1.join(''));
    console.log('Resultado 2 :' + salida2.join(''));
}

nuevasCadenas('carlos', 'alfredo')
