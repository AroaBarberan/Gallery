// Información del autor de la imagen. Sus propiedades son:
//     - Nickname: Nombre del autor. Obligatorio.
//     - Email: Correo electrónico. Obligatorio.
//     - Avatar: imagen asociada al usuario.
// Como métodos tendrá los getter y setter habituales teniendo en cuenta las propiedades que son obligatorias.

/**
 *
 * @param nickname
 * @param email
 * @param avatar
 * @constructor
 */

function Author(nickname, email, avatar) {

    if (!nickname) throw new ValueIsEmpty("Error. The parameter nickname is empty");
    if (!email) throw new ValueIsEmpty("Error. The parameter email is empty");
    // if (!/^[a-z][\w.-]*[a-z0-9]@[a-z]+\.[a-z]{2,3}/.test(email))
    //     throw  new EmailException("Error. The parameter is not correct");

    this._nickname = nickname;
    this._email = email;

    if (avatar instanceof Image || avatar instanceof Portrait || avatar instanceof Landscape) {
        this._avatar = avatar;
    } else {
        this._avatar = new Image(nickname + ' avatar', avatar || 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Der_Autor.jpg');
    }

    //Genero metodos getter y setter de todas las propiedades.

    Object.defineProperties(this, {
        nickname: {
            get: function () {
                return this._nickname;
            },
            set: function (nickname) {
                if (nickname != '') {
                    this._nickname = nickname;
                }
            }
        },
        email: {
            get: function () {
                return this._email;
            },
            set: function (email) {
                if (email != '') {
                    this._email = email;
                }
            }
        },
        avatar: {
            get: function () {
                return this._avatar;
            },
            set: function (avatar) {
                if (avatar instanceof Image || avatar instanceof Portrait || avatar instanceof Landscape) {
                    this._avatar = avatar;
                }
            }
        }
    });
}
Author.prototype = Object.create(Image.prototype);

Author.unserialize = function (object) {
    if (!object._avatar) object._avatar = new Image('Default Author Image', 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Der_Autor.jpg');
    else object._avatar = Image.unserialize(object._avatar);
    return new Author(object._nickname, object._email, object._avatar);
}
