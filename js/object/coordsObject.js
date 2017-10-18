// Coordenadas para adjuntar a una imagen. Sus propiedades son:
//     - Latitude: Latitud.
//     - Longitude: Longitud.
// Los métodos serán getter y setter, siendo ambas propiedades obligatorias.

/**
 *
 * @param latitude
 * @param longitude
 * @constructor
 */

function Coords(latitude, longitude) {
    if (!latitude) throw new ValueIsEmpty("Error. The parameter latitude is empty");
    if (!longitude) throw new ValueIsEmpty("Error. The parameter longitude is empty");

    this._latitude = latitude;
    this._longitude = longitude;

    //Genero metodos getter y setter de todas las propiedades.

    Object.defineProperty(this, "latitude", {
        get: function () {
            return this._latitude;
        },
        set: function (latitude) {
            if (latitude != '') {
                this._latitude = latitude;
            }
        }

    });

    Object.defineProperty(this, "longitude", {
        get: function () {
            return this._longitude;
        },
        set: function (longitude) {
            if (longitude != '') {
                this._longitude = longitude;
            }
        }
    });
}

Coords.unserialize = function (object) {
    if (!object.latitude || !object.longitude) return '';
    return new Coords(object._latitude, object._longitude);
}
