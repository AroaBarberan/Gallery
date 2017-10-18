class Images {

    typePortrait() {
        return galeria.portrait().map(i => i)
    }
    typeLandscape() {
        return galeria.landscape().map(i => i)
    }
    typeImages() {
        return galeria.imageGallery().map(i => i);
    }
}