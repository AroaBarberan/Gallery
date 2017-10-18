// Este objeto mantendrá el estado de la galería. La información que debe mantener es:
// - Título de la galería
// - Las imágenes que hayamos añadido a la galería. Implementado mediante un array de objetos imágenes.
// - Las categorías de imágenes que tengas en la galería. Implementado mediante un array de objetos categoría.
// - Los authors de las diferentes imágenes. Implementado mediante un array.
// - Categoría por defecto. En caso de no utilizar ninguna categoría a una imagen se utilizará esta categoría.
// - Autor por defecto. En caso de no utilizar ningún autor al añadir una imagen, se utilizará este autor.
/**
 *
 * @type {{getInstance}}
 */
var Gallery = (function () {
    var instance; //DONDE VOY A GUARDAR EL OBJETO UNICO.
    /**
     *
     * @param title
     * @constructor
     */
    function Gallery(title) {
        /**
         *
         * @type {any}
         * @private
         */
        this._title = title;
        var _images = [];
        var _categories = [];
        var _authors = [];

        //Para la propiedad Title
        Object.defineProperty(this, "title", {
            get: function () {
                if (!title) throw new ValueIsEmpty("Error: The title of the gallery can not be empty");
                return this._title;
            },
            set: function (title) {
                if (!title) throw new ValueIsEmpty("Error: The title of the gallery can not be empty");
                if (title != '') {
                    this._title = title;
                }
            }
        });

        //Devuelve el array de objetos categorías
        this.getCategorys = function () {
            return _categories.slice();
        }

        //Devuelve un array con los authors
        this.getAuthors = function () {
            return _authors.slice();
        }

        this.getAllImages = function () {
            return _images.slice();
        }
        //Añade una nueva categoría
        this.addCategory = function (category) {
            if (category == null) {
                throw new CategoryNullException()
            }
            if (_categories.indexOf(category) == -1) {
                _categories.push(category);
                addCategoryDB(category);
            } else {
                throw new CategoryExistException();
            }
            return _categories.length;
        };

        function addCategoryDB(category) {
            var database = indexedDB.open("gallery", 1);
            database.onsuccess = function (e) {
                var active = e.target.result;
                active.transaction('categories', 'readwrite').objectStore('categories').add(category);
            }
        }

        //Elimina una categoría
        this.removeCategory = function (category) {
            var n = _categories.indexOf(category);
            if (n != -1) {
                _images[n].categoria = new Category("Default Category", "Default description");
                _categories.splice(n, 1);
                removeCategoryDB(category);
            } else {
                throw new CategoryNotRegistered();
            }
            return _categories.length;
        }

        function removeCategoryDB(category) {
            var database = indexedDB.open("gallery", 1);
            database.onsuccess = function (e) {
                var active = e.target.result;
                active.transaction('categories', 'readwrite').objectStore('categories').delete(category.title);
            }
        }

        //Añade una nueva imagen a una categoría con un autor.
        this.addImage = function (image, category, author) {
            if (image == null) {
                throw new ImageNullException()
            }
            if (category != '') {
                if (_categories.indexOf(category) == -1) {
                    _categories.push(category);
                }
            } else {
                category = new Category("Default Category", "Default description");
            }
            if (author != '') {
                if (_authors.indexOf(author) == -1) {
                    _authors.push(author);
                }
            } else {
                author = new Author("Default Author", "default@gmail.com");
            }
            var imageGallery = {imagen: image, categoria: category, autor: author};
            _images.push(imageGallery);
            addImageDB(imageGallery);
            return _images.length;
        }

        function addImageDB(imageGallery) {
            var database = indexedDB.open("gallery", 1);
            database.onsuccess = function (e) {
                var active = e.target.result;
                active.transaction('images', 'readwrite').objectStore('images').add(imageGallery);
            }
        }

        //Elimina una imagen
        this.removeImage = function (imageToRemove) {
            let imageToRemoveIndex = _images.findIndex(element => imageToRemove.url === element.imagen.url);
            if (imageToRemoveIndex === -1) {
                throw new ImageNotExistException();
            }
            _images.splice(imageToRemoveIndex, 1);
            removeImageDB(imageToRemove);
            return _images.length;
        }

        function removeImageDB(image) {
            var database = indexedDB.open("gallery", 1);
            database.onsuccess = function (e) {
                var active = e.target.result;
                active.transaction('images', 'readwrite').objectStore('images').delete(image.url);
            }
        }

        //Devuelve todas las imágenes de una determinada categoría
        this.getCategoryImages = function (category) {
            if (category == null) {
                throw new CategoryNullException();
            }
            var categoryImages = [];
            for (var i = 0; i < _images.length; i++) {
                if (_images[i].categoria.title == category.title) {
                    categoryImages.push(_images[i]);
                }
            }
            return categoryImages;
        }

        //Añade un nuevo autor a la Galería
        this.addAuthor = function (author) {
            if (author == null) {
                throw new AuthorNullException();
            }
            if (_authors.indexOf(author) == -1) {
                _authors.push(author);
                addAuthorDB(author);
            } else {
                throw new AuthorExistException();
            }
            return _authors.length;
        }

        function addAuthorDB(author) {
            var database = indexedDB.open("gallery", 1);
            database.onsuccess = function (e) {
                /** @type IDBDatabase */
                var active = e.target.result;
                active.transaction('authors', 'readwrite').objectStore('authors').add(author);
            }
        }

        //Eliminar un autor
        this.removeAuthor = function (author) {
            var n = _authors.indexOf(author);
            if (n == -1) {
                throw new AuthorNotExistException();
            }
            _images[n].autor = new Author("Default Author", "defau@gmail.com");
            _authors.splice(n, 1);
            removeAuthorDB(author);
            return _authors.length;
        }

        function removeAuthorDB(author) {
            var database = indexedDB.open("gallery", 1);
            database.onsuccess = function (e) {
                var active = e.target.result;
                active.transaction('authors', 'readwrite').objectStore('authors').delete(author.nickname);
            }
        }

        //Devuelve todas las imágenes añadidas por un autor.
        this.getAuthorImages = function (author) {
            if (author == null) {
                throw new AuthorNullException();
            }
            var authorImages = [];
            for (var i = 0; i < _images.length; i++) {
                if (_images[i].autor.nickname == author.nickname) {
                    authorImages.push(_images[i]);
                }
            }
            return authorImages;
        }

        //Devuelve todas las imágenes de tipo retrato
        this.portrait = function () {
            var por = [];
            for (var i = 0; i < _images.length; i++) {
                if (_images[i].imagen instanceof Portrait) {
                    por.push(_images[i]);
                }
            }
            return por;
        }

        //Devuelve todas las imágenes de tipo apaisado
        this.landscape = function () {
            var lan = [];
            for (var i = 0; i < _images.length; i++) {
                if (_images[i].imagen instanceof Landscape) {
                    lan.push(_images[i]);
                }
            }
            return lan;
        }

        this.imageGallery = function () {
            var img = [];
            for (var i = 0; i < _images.length; i++) {
                if (_images[i].imagen instanceof Image) {
                    img.push(_images[i]);
                }
            }
            return img;
        }

        this.initialLoad = function (database, pop) {
            var transaction = database.transaction(['images', 'authors', 'categories'], 'readonly');
            var imagesTransaction = transaction.objectStore('images').getAll();
            var categoriesTransaction = transaction.objectStore('categories').getAll();
            var authorsTransaction = transaction.objectStore('authors').getAll();

            imagesTransaction.onsuccess = function (e) {
                var images = e.target.result;
                for (var i in e.target.result) {
                    var category = Category.unserialize(images[i].categoria);
                    var author = Author.unserialize(images[i].autor);
                    var image = Image.unserialize(images[i].imagen);
                    _images.push({imagen: image, autor: author, categoria: category});
                }
                pop.populate(_images);
            }
            categoriesTransaction.onsuccess = function (e) {
                var categories = e.target.result;
                for (var i in e.target.result) {
                    _categories.push(Category.unserialize(categories[i]));
                }
            }
            authorsTransaction.onsuccess = function (e) {
                var authors = e.target.result;
                for (var i in e.target.result) {
                    _authors.push(Author.unserialize(authors[i]));
                }
            }
        }
    }

    function getInstance(title) {
        if (!instance) {
            instance = new Gallery(title);
        }
        return instance;
    }

//ESTE RETURN DEVUELVE EL OBJETO getInstance sin ejecutar la funcion por tanto sin parentesis
//para que asi cuando sea devuelto se ejecute.
    return {
        getInstance: getInstance
    };
})
();
