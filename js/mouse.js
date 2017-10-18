class Mouse {

    mouseEnter() {
        document.getElementById('contenido').style.display = 'block';
    }

    mouseOut() {
        document.getElementById('contenido').style.display = 'none';
    }

    mouseMove(e, tipo, des) {
        document.getElementById('contenido').innerHTML = "<strong>Imagen tipo: </strong>" + tipo + "<br>"
            + "<strong>Descripción: </strong>" + des;

        document.getElementById('contenido').style.display = 'block';
        document.getElementById('contenido').style.left = (e.clientX + 10) + 'px';
        document.getElementById('contenido').style.top = (e.clientY + 10) + 'px';
    }

    addEventListenerMouseEvent(imagen) {
        imagen.addEventListener("mouseenter", mouse.mouseEnter);
        imagen.addEventListener("mouseout", mouse.mouseOut);
        imagen.addEventListener("mousemove", function (e) {
            mouse.mouseMove(e, event.currentTarget.dataset.title, event.currentTarget.dataset.des);
        });
    }
}