class Populate {

    populate(images) {
        limpiar();
        var elem;

        for (var i = 0; i < images.length; i++) {
            elem = this.createElements();
            this.addSetAtributeToDiv([elem['div'], elem['divImagen'], elem['divTextoTitulo']], i);
            this.addSetAtributeImage(elem['imagen'], i, images[i].imagen.title, images[i].imagen.description, images[i].autor.nickname, images[i].categoria.title, images[i].imagen.url, images[i].imagen.coords);
            this.showTitleAndDescription([elem['divTextoTitulo'], elem['divTextoDescripcion']], ["Título: ", ""], [images[i].imagen.title, ""]);
            this.addSetAtributeInput(elem['input'], i);

            if (estaLogeado()) {
                elem['input'].addEventListener('click', function () {
                    var imageToRemove = images[event.currentTarget.dataset.id].imagen;
                    galeria.removeImage(imageToRemove);
                    pop.populate(galeria.getAllImages());
                });
            }
            elem['imagen'].addEventListener("click", function () {
                var ventana = window.open("DetailImage.html", "IMAGE" + myWindows.length, "");
                var temptitle = event.currentTarget.dataset.title;
                var tempDes = event.currentTarget.dataset.des;
                var tempAuthor = event.currentTarget.dataset.au;
                var tempCategory = event.currentTarget.dataset.categoria;
                var tempUrl = event.currentTarget.dataset.url;
                var tempCoords = event.currentTarget.dataset.coords;

                var arrayImg = galeria.getAllImages();
                ventana.onload = function () {
                    var img = this.document.createElement("img");

                    for (var i = 0; i < arrayImg.length; i++) {
                        img.setAttribute("class", 'col-sm-6');
                        this.document.getElementById('title').innerHTML = temptitle;
                        this.document.getElementById('description').innerHTML = tempDes;
                        this.document.getElementById('author').innerHTML = tempAuthor;
                        this.document.getElementById('category').innerHTML = tempCategory;
                        this.document.getElementById('url').innerHTML = tempUrl;
                        this.document.getElementById('coords').innerHTML = tempCoords;

                        this.document.getElementById('urlA').setAttribute("href", tempUrl);

                        if (arrayImg[i].imagen.title == temptitle) {
                            img.setAttribute("src", arrayImg[i].imagen.url);
                            this.document.getElementById('imageType').innerHTML = pop.typeImage(arrayImg[i].imagen);
                        }
                    }
                    this.document.getElementById('imagen').appendChild(img);
                }
                myWindows.push(ventana);
            });
            mouse.addEventListenerMouseEvent(elem['imagen']);
            this.addAppendChildPopulate(elem['a'], elem['imagen'], elem['divImagen'], elem['div'], elem['divTextoTitulo'], elem['divTextoDescripcion'], elem['input']);
            document.getElementById('content').appendChild(elem['div']);
        }
    }

    populateAuthors(authors) {
        limpiar();
        var elem;
        for (var i = 0; i < authors.length; i++) {
            elem = this.createElements();
            elem['imagen'].setAttribute("class", 'image');

            this.addSetAtributeToDiv([elem['div'], elem['divImagen'], elem['divTextoTitulo']], i);
            this.addSetAtribute(elem['imagen'], i, authors[i].nickname, authors[i].email, authors[i].avatar, authors[i].avatar.url);
            this.showTitleAndDescription([elem['divTextoTitulo'], elem['divTextoDescripcion']], ["Imágenes del Autor: ", "Email: "], [authors[i].nickname, authors[i].email]);
            this.addSetAtributeInput(elem['input'], i);

            if (estaLogeado()) {
                elem['input'].addEventListener('click', function () {
                    var authorToRemove = authors[event.currentTarget.dataset.id];
                    var imagesAuthorToRemove = galeria.getAuthorImages(authorToRemove);

                    for (var i = 0; i < imagesAuthorToRemove.length; i++) {
                        imagesAuthorToRemove[i].autor = new Author("Default Author", "default@gmail.com", new Portrait("Default Author", "https://static.cambridge.org/resource/id/urn:cambridge.org:id:binary:82131:20160618001700979-0838:00439figu16.png?pub-status=live"));
                    }
                    galeria.removeAuthor(authorToRemove);
                    pop.populateAuthors(galeria.getAuthors());
                });
            }
            elem['imagen'].addEventListener("click", function () {
                    var id = event.currentTarget.dataset.id;
                    pop.populate(galeria.getAuthorImages(authors[id]));
                }
            );
            mouse.addEventListenerMouseEvent(elem['imagen']);
            this.addAppendChildPopulate(elem['a'], elem['imagen'], elem['divImagen'], elem['div'], elem['divTextoTitulo'], elem['divTextoDescripcion'], elem['input']);
            document.getElementById('content').appendChild(elem['div']);
        }
    }

    populateCategorys(categories) {
        limpiar();
        var elem
        for (var i = 0; i < categories.length; i++) {
            elem = this.createElements();
            elem['imagen'].setAttribute("class", 'image');

            this.addSetAtributeToDiv([elem['div'], elem['divImagen'], elem['divTextoTitulo']], i);
            this.addSetAtribute(elem['imagen'], i, categories[i].title, categories[i].description, categories[i].url, categories[i].url);
            this.showTitleAndDescription([elem['divTextoTitulo'], elem['divTextoDescripcion']], ["Categoría: ", "Descripción: "], [categories[i].title, categories[i].description]);
            this.addSetAtributeInput(elem['input'], i);

            if (estaLogeado()) {
                elem['input'].addEventListener('click', function () {
                    var categoryToRemove = categories[event.currentTarget.dataset.id];
                    var imagescategoryToRemove = galeria.getCategoryImages(categoryToRemove);
                    for (var i = 0; i < imagescategoryToRemove.length; i++) {
                        imagescategoryToRemove[i].categoria = new Category("Default Category", "Default description", "https://image.freepik.com/vector-gratis/mock-up-de-cuadro-blanco_1095-52.jpg");
                    }
                    galeria.removeCategory(categoryToRemove);
                    pop.populateCategorys(galeria.getCategorys());
                });
            }
            elem['imagen'].addEventListener("click", function () {
                    var id = event.currentTarget.dataset.id;
                    pop.populate(galeria.getCategoryImages(categories[id]));
                }
            );
            mouse.addEventListenerMouseEvent(elem['imagen']);
            this.addAppendChildPopulate(elem['a'], elem['imagen'], elem['divImagen'], elem['div'], elem['divTextoTitulo'], elem['divTextoDescripcion'], elem['input']);
            document.getElementById('content').appendChild(elem['div']);
        }
    }

    createElements() {
        var div = document.createElement('div');
        var divImagen = document.createElement('div');
        var divTextoTitulo = document.createElement('div');
        var a = document.createElement("a");
        var imagen = document.createElement("img");
        var divTextoDescripcion = document.createElement('div');
        var input = document.createElement('input');

        a.setAttribute("href", '#');
        div.setAttribute("class", 'col-sm-4');

        return {
            'a': a,
            'imagen': imagen,
            'divImagen': divImagen,
            'div': div,
            'divTextoTitulo': divTextoTitulo,
            'divTextoDescripcion': divTextoDescripcion,
            'input': input,
        };
    }

    addSetAtributeToDiv(elements, id) {
        elements[0].classList.add("divAlturaFija");
        elements[0].setAttribute('data-id', '' + id + '');
        elements[1].setAttribute('class', 'divImagen');
        elements[2].classList.add("alturaTitulo");
    }

    addSetAtributeImage(element, i, title, description, autor, category, url, coords, url2 = '') {
        element.classList.add('img-responsive');
        element.setAttribute("data-id", '' + i + '');
        element.setAttribute("data-title", '' + title + '');
        element.setAttribute("data-des", '' + description + '');
        element.setAttribute("data-au", '' + autor + '');
        element.setAttribute("data-categoria", '' + category + '');
        element.setAttribute("data-url", '' + url + '');
        element.setAttribute("src", '' + url + '');
        element.setAttribute("data-coords", '' + coords + '');
        if (url2 != '') element.setAttribute("src", '' + url2 + '');
    }

    addSetAtribute(element, i, title, description, url, url2 = '') {
        element.classList.add('img-responsive');
        element.setAttribute("data-id", '' + i + '');
        element.setAttribute("data-title", '' + title + '');
        element.setAttribute("data-des", '' + description + '');
        element.setAttribute("data-url", '' + url + '');
        element.setAttribute("src", '' + url + '');
        if (url2 != '') element.setAttribute("src", '' + url2 + '');
    }

    showTitleAndDescription(elements, strings, details) {
        elements[0].innerHTML = "<h3><strong>" + strings[0] + " </strong>" + details[0] + "</h3>";
        elements[1].innerHTML = "<strong>" + strings[1] + " </strong>" + details[1];
    }

    addAppendChildPopulate(a, imagen, divImagen, div, divTextoTitulo, divTextoDescripcion = '', input = '') {
        a.appendChild(imagen);
        divImagen.appendChild(a);
        div.appendChild(divImagen);
        div.appendChild(divTextoTitulo);
        if (divTextoDescripcion != '') div.appendChild(divTextoDescripcion);
        if (estaLogeado()) {
            if (input != '') divImagen.appendChild(input);
        }
    }

    typeImage(imagen) {
        if (imagen instanceof Landscape) return 'Landscape';
        else if (imagen instanceof Portrait) return 'Portrait';
        else return 'Imagen';
    }

    addSetAtributeInput(element, id) {
        element.setAttribute("data-id", '' + id + '');
        element.setAttribute("type", "image");
        element.setAttribute("class", "borrar");
        element.setAttribute("src", "http://aminoapps.com/static/bower/emojify.js/images/emoji/x.png");
    }

}
