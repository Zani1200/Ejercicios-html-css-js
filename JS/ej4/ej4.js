let contenido = document.getElementById("contenido");
setInterval(
    function segundos(){
        let horaActual = Date.now();
        contenido.innerText = horaActual;
},1000)