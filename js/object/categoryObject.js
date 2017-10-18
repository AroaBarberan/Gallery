// Con este objeto podemos crear la estructura de categorías de imágenes de la galería. Sus propiedades serán:
//    - Title: Con el título de la categoría.
//    - Description: Con la descripción de la misma.
// Sus métodos serán los habituales getter y setter de estas propiedades, aunque el título no podrá ser vacío.

/**
 *
 * @param title
 * @param description
 * @constructor
 */

function Category(title, description, url) {

    if (!title) throw new ValueIsEmpty("Error: The parameter title is empty");

    this._title = title;
    this._description = description || '';

    this._url = url || 'https://image.freepik.com/vector-gratis/mock-up-de-cuadro-blanco_1095-52.jpg';

    //Genero metodos getter y setter de todas las propiedades.
    Object.defineProperties(this, {
        title: {
            get: function () {
                return this._title;
            },
            set: function (title) {
                if (title != '') {
                    this._title = title;
                }
            }
        },
        description: {
            get: function () {
                return this._description;
            },
            set: function (description) {
                this._description = description;
            }
        },
        url: {
            get: function () {
                return this._url;
            },
            set: function (url) {
                this._url = url;
            }
        }
    });
}
Category.unserialize = function (object) {
    return new Category(object._title, object._description, object._url);
}
