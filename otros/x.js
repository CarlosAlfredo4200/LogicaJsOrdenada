 
 
let num = 0;
let a;
let numContador;


function iniciarjs() {
    
    a = setInterval(() => {
        
        num += 1;
        numContador = document.getElementById('contador').innerHTML = num;
    }, 1000);
    
}

function detenerjs() {
   clearInterval(a)
}

