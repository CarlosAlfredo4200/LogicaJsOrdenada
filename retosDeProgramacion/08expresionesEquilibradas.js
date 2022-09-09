// * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
//  * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
//  * - Paréntesis, llaves y corchetes son igual de prioritarios.No hay uno más importante que otro.
//  * - Expresión balanceada: { [a * (c + d)] - 5 }
//  * - Expresión no balanceada: { a * (c + d) ]- 5 }

const balanceador = (cadena) => {

    const stack = []

    for (const caracter of cadena) {

        if (caracter == "(") {
            stack.push(caracter)
        }

        if (caracter == ")") {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }

    }

    console.log(stack.length === 0);
}

balanceador("())")

