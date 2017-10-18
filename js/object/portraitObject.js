// Hereda de Image para especilizar una imagen en forma de retrato.
// No tiene propiedades específicas.
/**
 *
 * @param title
 * @param description
 * @param url
 * @param coords
 * @constructor
 */

function Portrait(title, url, description , coords) {
    if (!title) throw new ValueIsEmpty("Error: The parameter title is empty");
    // if (!url) throw new ValueIsEmpty("Error: The parameter url is empty");
    Image.call(this,title, url, description || '', coords || '');
}
Portrait.prototype = Object.create(Image.prototype);

