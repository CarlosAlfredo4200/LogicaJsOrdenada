//dado un array de numeros devolver sin numero duplicados

const eliminarDuplicados = (elementos) => {

    elementos = elementos.filter(elemento => {
        return typeof elemento === 'number'
    });

    //new Set devuelve un objeto sin duplicados
    let sinDuplicados = new Set(elementos)

    //array.from() convierte cualquier cosa en array
    console.log(Array.from(sinDuplicados));
}

eliminarDuplicados(['Hola', true, 1, 2, 2, 3, 3, 5, 6,])

//------------------ Version Jhon M ---------------

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
//  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste un arreglo numérico");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if (arr.length === 0) return console.error("el arreglo esta vacio");
    if (arr.length === 1) return console.error("el arreglo debe tener almenos 2 elementos");

            //devolver en un objeto y original
    return console.log({
        original:arr,
                    //filter genera otro arreglo (valor,index=posicion, self=mismo arreglo)
                    // => indexOf=buscar elementos
        sinDuplicado:arr.filter((value,index,self) => self.indexOf(value)=== index)
    });
}
// quitarDuplicados()
// quitarDuplicados({})
// quitarDuplicados([])
// quitarDuplicados([2])
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);