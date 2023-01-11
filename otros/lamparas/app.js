const encendidas = [false,false,false];

const luces = document.querySelectorAll('.luz');
const textos = document.querySelectorAll('.texto');
const inputs = document.querySelectorAll('input');

function encender(index) {
    if (encendidas[index]==false) {
            luces[index].className="luz l"+index;
            textos[index].className="texto t"+index;
            encendidas[index] = true;
    }else{
        luces[index].className="luz";
        textos[index].className="texto";
        encendidas[index] = false;
        inputs[index].checked = false;
    }
}