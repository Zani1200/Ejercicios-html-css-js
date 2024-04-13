let contenido = document.getElementById("contenido");
setInterval(
    function segundos(){
        let horaActual = new Date();
        contenido.innerText = horaActual.getSeconds();
},1000)