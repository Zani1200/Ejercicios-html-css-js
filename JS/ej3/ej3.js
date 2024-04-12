let contenido = document.getElementById("contenido");
let horaActual = new Date();
console.log(horaActual.ge)
setInterval(
    function segundos(){
        let horaActual = new Date();
        contenido.innerText = horaActual.getSeconds();
},1000)