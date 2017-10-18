class Formulario {

    addLoginForm() {
        login();
        document.getElementById('sesion').textContent = Cookie.getValue(usuarioLogeado);
        document.getElementById('cerrarSesion').setAttribute('class', 'visible');
        document.getElementById('agregar').style.display = 'block';
        pop.populate(galeria.getAllImages());
    }

    addAuthorForm() {
        var nickname = document.getElementById('name').value;
        var password = document.getElementById('password');
        var email = document.getElementById('email').value;
        var avatar = document.getElementById('avatar').value;

        var autor = new Author(nickname, email, avatar);
        galeria.addAuthor(autor);
        this.clearAuthor();
    }

    clearAuthor() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('avatar').value = '';
    }

    addCategoriaForm() {
        var title = document.getElementById('titleCategoria').value;
        var description = document.getElementById('descriptionCategoria').value;
        var url = document.getElementById('urlCategoria').value;
        console.log(url);
        var categoria = new Category(title, description, url);
        galeria.addCategory(categoria);
        this.clearCategory();
    }

    clearCategory() {
        document.getElementById('titleCategoria').value = '';
        document.getElementById('descriptionCategoria').value = '';
        document.getElementById('urlCategoria').value = '';
    }

    addImageForm() {
        var nameAutor = document.getElementById('autorImagenAgregada').value;
        var title = document.getElementById('title').value;
        var url = document.getElementById('url').value;
        var descripcion = document.getElementById('description').value;
        var coords = document.getElementById('coords').value;
        var addedCategory = document.getElementById('categoriaImagenAgregada').value;

        var image = new Image(title, url, descripcion, coords);
        var author = this.searchAuthor(nameAutor);
        var category = this.searchCategory(addedCategory);

        galeria.addImage(image, category, author);
        pop.populate(galeria.getAllImages());
        this.clearSelects();
    }
    clearSelects() {
        document.getElementById('autorImagenAgregada').value = '';
        document.getElementById('title').value = '';
        document.getElementById('url').value = '';
        document.getElementById('description').value = '';
        document.getElementById('coords').value = '';
        document.getElementById('autorImagenAgregada').innerHTML = '';
        document.getElementById('categoriaImagenAgregada').innerHTML = '';
    }

    searchAuthor(nameAutor) {
        var autores = galeria.getAuthors();
        for (var i = 0; i < autores.length; i++) {
            if (nameAutor == autores[i].nickname) return autores[i];
        }
    }

    searchCategory(addedCategory) {
        var categorias = galeria.getCategorys();
        for (var i = 0; i < categorias.length; i++) {
            if (addedCategory == categorias[i].title) return categorias[i];
        }
    }
}