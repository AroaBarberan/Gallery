galeria = new Gallery.getInstance("Mi galeria");
var myWindows = [];
var menu = new Menu();
var added = new Data();
var imagenes = new Images();
var pop = new Populate();
var log = new Formulario();
var mouse = new Mouse();
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function startDB() {

    var database = indexedDB.open("gallery", 1);

    database.onupgradeneeded = function (e) {
        var animals = added.animals();
        var cartoons = added.cartoons();
        var places = added.places();
        var errors = added.errors();
        var categories = added.categorys();
        var authors = added.author();

        var images = [
            {imagen: animals[0], categoria: categories[4], autor: authors[0]},
            {imagen: animals[1], categoria: categories[0], autor: authors[1]},
            {imagen: animals[2], categoria: categories[0], autor: authors[2]},
            {imagen: animals[3], categoria: categories[0], autor: authors[3]},
            {imagen: animals[4], categoria: categories[0], autor: authors[4]},
            {imagen: animals[5], categoria: categories[0], autor: authors[0]},
            {imagen: animals[6], categoria: categories[0], autor: authors[1]},
            {imagen: cartoons[0], categoria: categories[1], autor: authors[2]},
            {imagen: cartoons[1], categoria: categories[1], autor: authors[3]},
            {imagen: cartoons[2], categoria: categories[1], autor: authors[4]},
            {imagen: cartoons[3], categoria: categories[4], autor: authors[0]},
            {imagen: places[0], categoria: categories[2], autor: authors[1]},
            {imagen: places[1], categoria: categories[2], autor: authors[2]},
            {imagen: places[2], categoria: categories[2], autor: authors[3]},
            {imagen: places[3], categoria: categories[4], autor: authors[4]},
            {imagen: errors[0], categoria: categories[3], autor: authors[0]},
            {imagen: errors[1], categoria: categories[3], autor: authors[1]},
            {imagen: errors[2], categoria: categories[3], autor: authors[3]},
            {imagen: errors[3], categoria: categories[3], autor: authors[2]}
        ];

        /** @type IDBDatabase */
        var active = e.target.result;
        var imageStore = active.createObjectStore('images', {keyPath: 'imagen._url'});
        var categoryStore = active.createObjectStore('categories', {keyPath: '_title'});
        var authorStore = active.createObjectStore('authors', {keyPath: '_nickname'});
        for (var i in images) {
            if (images[i].imagen instanceof Landscape) {
                images[i].imagen.type = 'landscape';
            }
            if (images[i].imagen instanceof Portrait) {
                images[i].imagen.type = 'portrait';
            }
            imageStore.add(images[i]);
        }
        for (var i in categories) {
            categoryStore.add(categories[i]);
        }
        for (var i in authors) {
            authorStore.add(authors[i]);
        }
    }

    database.onsuccess = function (e) {
        galeria.initialLoad(e.target.result, pop);
    }
}

function onload() {
    startDB();

    if (estaLogeado()) {
        var name = Cookie.getValue(usuarioLogeado);

        document.getElementById('sesion').textContent = name;
        document.getElementById('cerrarSesion').setAttribute('class', 'visible');
        document.getElementById('agregar').style.display = 'block';

        hiddenLogin();
    }


    pop.populate(galeria.getAllImages());
}

function limpiar() {
    document.getElementById('content').innerHTML = "";
}

function hiddenLogin() {
    document.getElementById('login').setAttribute('class', 'hidden');
    document.getElementById('dividir').setAttribute('class', 'hidden');
}

function visibleLogin() {
    document.getElementById('login').setAttribute('class', 'visible');
    document.getElementById('dividir').setAttribute('class', 'visible');
}
