// Objeto que permitirá añadir imágenes a la galería. Tendrá las siguientes propiedades:
//     - Title: Título de la imagen. Obligatoria.
//     - Description: Descripción de la imagen
//     - URL: Dirección donde está ubicada la imagen. Obligatoria.
//     - Coords: Coordenadas donde se tomó la imagen.
// Como métodos tendrá los getter y setter habituales.

/**
 *
 * @param title
 * @param description
 * @param url
 * @param coords
 * @constructor
 */

function Image(title, url, description, coords) {

    if (!title) throw new ValueIsEmpty("Error: The parameter title is empty");

    this._title = title;
    this._url = url;
    this._description = description || '';
    this._coords = coords || '';

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
        url: {
            get: function () {
                return this._url;
            },
            set: function (url) {
                this._url = url;
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
        coords: {
            get: function () {
                return this._coords;
            },
            set: function (coords) {
                this._coords = coords;
            }
        }
    });
}

Image.unserialize = function (object) {
    if (!object.description) object.description = '';
    if (!object.coords) object.coords = '';
    else object.coords = Coords.unserialize(object.coords);
    if (object.type && object.type == 'landscape') {
        return new Landscape(object._title, object._url, object._description, object._coords);
    }
    if (object.type && object.type == 'portrait') {
        return new Portrait(object._title, object._url, object._description, object._coords);
    }
    return new Image(object._title, object._url, object._description, object._coords);
}
