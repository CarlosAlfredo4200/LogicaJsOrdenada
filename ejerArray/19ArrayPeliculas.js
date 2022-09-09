// Dado un array de objetos de peliculas ( titulo, director, vista) 
// mostrar  las peliculas wistas y cuales no  


const peliculas = [
    {
        titulo: 'Ladrón de bicicletas (1948)',
        director: 'Vittorio De Sica',
        vista: true
    },
    {
        titulo: 'Los 400 golpes (1959)',
        director: 'François Truffaut',
        vista: false
    },
    {
        titulo: 'El padrino (1972)',
        director: 'Francis Ford Coppola',
        vista: true
    },
    {
        titulo: 'Taxi Driver (1976)',
        director: 'Martín Scorsese',
        vista: false
    },
    {
        titulo: 'Cinema Paradiso (1988)',
        director: 'Giuseppe Tornatore',
        vista: true
    }
]


 const peli = () => {

    for (const pelicula of peliculas) {
        
          let resultado = `${pelicula.titulo} de ${ pelicula.director }`
          
            if(pelicula.vista){
                console.log(`Ya la viste ${resultado}`);
            }
            else{
                console.log(`Te falta por ver ${resultado}`);
                 

            }
        
    }
 }

 peli(peliculas)