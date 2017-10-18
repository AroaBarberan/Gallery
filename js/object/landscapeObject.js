// Hereda de Image para especializar una imagen apaisada.
// No tiene propiedades específicas.

/**
 *
 * @param title
 * @param description
 * @param url
 * @param coords
 */

function Landscape(title, url, description, coords) {
    if (!title) throw new ValueIsEmpty("Error: The parameter title is empty");
    if (!url) throw new ValueIsEmpty("Error: The parameter url is empty");
    Image.call(this, title, url, description || '' , coords || '');

}
Landscape.prototype = Object.create(Image.prototype);

