// * Enunciado: Crea UNA ÚNICA FUNCIÓN(importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
//  * - La función recibirá por parámetro sólo UN polígono a la vez.
//  * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
//  * - Imprime el cálculo del área de un polígono de cada tipo.


function areas(base, altura ) {
    
    let areaTrianguo = (base * altura) / 2;

    let areaCuadrado = altura * altura;
    let areaRectangulo = base * altura;
    
    
    console.log(`El área del triangulo seria ${areaTrianguo} cm`);
    console.log(`El área del cuadrado seria ${areaCuadrado}cm`);
    console.log(`El área del triangulo seria ${areaRectangulo} cm`);
}

areas(12, 18)