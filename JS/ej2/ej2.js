let contenido = document.getElementById("contenido");
const arrayFondo = ["red","blue","green","yellow"];
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
setInterval(
    function cambioColor(){
        let numero = getRandom(0,3);
        let fondo = arrayFondo[numero];
        contenido.style.backgroundColor = fondo;
        contenido.style.color = fondo;
},1000)

