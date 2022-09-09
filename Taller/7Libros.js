// 7. Haga un algoritmo que capture unos datos con: 
// nombre del libro, 
// número de páginas, 
// valor por  hoja. 

// Obtenga el libro más barato y el promedio del costo con IVA de cada libro. 
// Costo_Libro = valor_hoja * num_hojas. 


//-------Declaro las variables -------
let libros = []; // Variable de tipo array
let costos = [];
let libroMasBarato = 0;

//------ Inicio: pido código del libro como referencia--------
codigo = parseInt(prompt("Ingrese código del libro:"));

//Inicio ciclo
while (codigo !== 0) {
    nombreLibro = prompt("Ingrese nombre del libro :");
    numeroPaginas = prompt("Ingrese el número de pag  :");
    valorHoja = prompt("Ingrese el valor por hoja :");
  
    //Obtener el costo de cada libro neto
    let costoLibro = numeroPaginas * valorHoja

     //Obtener el costo de cada libro + el IVA
     let costoLibroIVA = ((costoLibro * 19)/100) + costoLibro
    
    // Guardar los valores en las variables
    libros.push(nombreLibro)
    costos.push(costoLibro)


    //Imprimo info de cada libro como referencia
    console.log(`Nombre del libro : `+ nombreLibro);
    console.log(`# de páginas  : `+ numeroPaginas);
    console.log(`Valor por hoja :$ `+ valorHoja);
    console.log('Valor del libro neto:$' + costoLibro);
    console.log('Valor del libro con iva:$' + costoLibroIVA);
    console.log('\n');


  codigo = parseInt(prompt("Ingrese código del libro:"));
        
   
}

//---- Fin del cliclo al ingresar como código el 0

//Obtener del array costos el valor minimo
libroMasBarato = Math.min(...costos);


//---Obtener el indice(posición en el array ) del valor
let indiceCostoLibro = costos.lastIndexOf(libroMasBarato);
 

// Obtener en el array de libros el nombre del libro especifico basado en el indice 
let nombreLibroMasBarato = libros[`${indiceCostoLibro}`];



// Imprimir los datos resultantes
console.log(`El libro mas economico de todos es : ${nombreLibroMasBarato} y su valor es de : ${libroMasBarato}`);