
// Escriba un programa que pida la base y la altura de un rectángulo y permita calcular :Area, perimetro y grafucar el rectàngulo.

const cuadrado = (base, altura) => {
    console.log('\n');
    let puntos = '';
    let area;
    let perimetro;

    //Calcular
    area = base * altura;
    perimetro = 2 * (base + altura)
     
    console.log(`El area del reactàngulo es: ${area}`);
    console.log(`El perimetro del reactàngulo es: ${perimetro}`);
    console.log('\n');

    //Graficar

    for (let k = 1; k <= base; k++) {
        puntos += '*' + ' '
    }

    for (let k = 1; k <= altura; k++) {
        console.log(puntos);
    }
    console.log('\n');

    
    
    

}





cuadrado(5, 4)
