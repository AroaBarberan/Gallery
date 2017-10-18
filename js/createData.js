class Data {

    animals() {
        var perro = new Portrait("Perro.", "https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2015/11/akita-inu.jpg",
            "Mamífero carnívoro de la familia de los cánidos, que constituye una subespecie del lobo.", '20 48 95');
        var gato = new Image("Gato.", "http://static.notinerd.com/wp-content/uploads/2015/06/Captura-de-pantalla-2015-06-09-a-las-11.38.12.jpg",
            "Es una subespecie de mamífero carnívoro de la familia Felidae.");
        var osoPanda = new Image("Oso Panda.", "http://www.anipedia.net/imagenes/imagenes-osos-panda.jpg",
            "Mamífero del orden de los carnívoros.");
        var cocodrilo = new Portrait("Cocodrilo.", "http://imagenes.lainformacion.com/2012/07/01/noticias/Lolong-cocodrilo-gigante_492860903_10929463_1024x691.jpg",
            "Reptil de gran tamaño, de color marrón verdoso y piel cubierta de escamas muy duras.");
        var delfin = new Image("Delfin.", "http://www.ecologiaverde.com/wp-content/2014/02/Delfin-antorcha-Sohi.jpg",
            "Familia de cetáceos odontocetos muy heterogénea, que comprende 34 especies.");
        var flamenco = new Image("Flamenco.", "https://s-media-cache-ak0.pinimg.com/736x/81/f7/71/81f77169ad6c85ee966821c82439dd2b.jpg",
            "Son aves que se distribuyen tanto por el hemisferio occidental como por el hemisferio oriental.");
        var leon = new Image("Leon.", "https://www.dondevive.org/wp-content/uploads/2015/07/leon.jpg",
            "Es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera.");

        return [perro, gato, osoPanda, cocodrilo, delfin, flamenco, leon];
    }

    cartoons() {
        var kiss = new Portrait("Kiss.", "https://k35.kn3.net/taringa/2/9/2/4/4/3/5/carpmaster/6A4.jpg?7072",
            "grupo Kiss");
        var acdc = new Portrait("ACDC.", "http://st-listas.20minutos.es/images/2014-07/384491/4487231_640px.jpg?1405738119",
            "grupo ACDC");
        var queen = new Image("Queen.", "http://globedia.com/imagenes/usuarios/noticias/41501/1280031798.jpg",
            "grupo queen");
        var rollingStone = new Image("Rolling Stone.", "http://3.bp.blogspot.com/-18qpe3PYGRo/Tgxmoi-F5JI/AAAAAAAAAb4/6_3KiHDmSQo/s1600/vejun30-11portaphoto11.jpg",
            "grupo Rolling Stone");

        return [kiss, acdc, queen, rollingStone];
    }

    places() {
        var cataratasIguazu = new Landscape("Cataratas de Iguazú.", "http://media.staticontent.com/media/pictures/92b4f1bb-8cd6-4834-859e-751a0df7604c/577x330",
            "Son un conjunto de cataratas que se localizan sobre el río Iguazú.");
        var selvaNegra = new Landscape("La Selva Negra.", "http://www.losapuntesdelviajero.com/wp-content/uploads/2013/10/Cataratas-de-Triberg-Selva-Negra-Alemania.jpg",
            "La Selva Negra es un macizo montañoso con una gran densidad forestal ubicado al suroeste de Alemania.");
        var puertoPrincesa = new Image("Puerto Princesa.", "http://cde.peru.com/ima/0/0/8/8/5/885260/924x530/puerto-princesa.jpg",
            "El Parque Nacional del río subterráneo de Puerto Princesa se sitúa en la isla de Palawan.");
        var Cabárceno = new Landscape("Parque de Naturaleza.", "https://4.bp.blogspot.com/-rFhvjKiallQ/V0GRiK70zqI/AAAAAAAACng/Z-VFPIZ-sy0E6W2Yn9KetVNdZnoCBe9cACKgB/s1600/Parque%2Bnaturaleza%2Bcabarceno.jpg",
            "está situado en el valle del Pisueña, a 17 kilómetros de Santander y emplazado en una antigua mina de extracción de hierro, en la localidad de Cabárceno, del municipio de Penagos.");

        return [cataratasIguazu, selvaNegra, puertoPrincesa, Cabárceno];
    }

    errors() {
        var error1 = new Image("No es una funcion.", "http://i64.tinypic.com/ojh7d4.png", "Claro, no se puede llamar a una funcion que no existe.");
        var error2 = new Image("Propiedad undefined.", "http://i65.tinypic.com/crbsm.png", "Claro, no se puede leer una propiedad indefinida.");
        var error3 = new Image("Coger propiedad.", "http://i63.tinypic.com/346lv6t.png", "Claro, no se puede coger una propiedad.");
        var error4 = new Image("Solucionando...", "http://i64.tinypic.com/2bnv2h.png", "En busqueda de la solucion.");

        return [error1, error2, error3, error4];
    }

    categorys() {
        var animals = new Category("Animales", "Grupo amplios de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares.", "https://userscontent2.emaze.com/images/3fd567f7-341d-490e-ae4d-ebb72a962498/c032bd0d0bc82076a289ab25298a1dcc.jpg");
        var cartoons = new Category("Caricaturas", "Retrato que exagera o distorsiona la apariencia física de una o varias personas.", "http://previews.123rf.com/images/mastakas/mastakas1401/mastakas140100241/25495649-Arte-Caricaturas-Caras-del-hombre-con-diferentes-peinados-Blanco-y-Negro-Conjunto-de-ilustraciones-Foto-de-archivo.jpg");
        var places = new Category("Lugares", "Aglomeración secundaria de un municipio menor que una villa y mayor que una aldea.", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Collage_Rome.jpg/300px-Collage_Rome.jpg");
        var errors = new Category("Errores", "Quebraderos de cabeza", "http://www.coordinacionempresarial.com/wp-content/uploads/2014/12/errores-CAE.jpg");
        var categoryDefaults = new Category("Default Category", "Default description", "https://image.freepik.com/vector-gratis/mock-up-de-cuadro-blanco_1095-52.jpg");

        return [animals, cartoons, places, errors, categoryDefaults];
    }

    author() {
        var gilgamesh = new Author("Gilgamesh", "gilgamesh@gmail.com", new Portrait("Avatar Gilgamesh", "http://www.caricaturasalacarta.com/wp-content/flagallery/bn/thumbs/thumbs_caricatura_rapida_blanco_y_negro_famosos_paul_newman.jpg"));
        var gawain = new Author("Gawain", "gawain@gmail.com", new Portrait("Avatar Gawain", "http://previews.123rf.com/images/speedfighter/speedfighter1007/speedfighter100700069/7366099-Copperplate-grabado-de-un-dibujo-del-retrato-Chandos-de-William-Shakespeare-alrededor-de-1783-De-una-Foto-de-archivo.jpg"));
        var eirik = new Author("Eirik", "eirik@gmail.com", new Portrait("Avatar Eirik", "http://images.yodibujo.es/_uploads/_tiny_galerie/20120102/20-rene-goscinny-yyg_hbb.jpg"));
        var vilhelm = new Author("Vilhelm", "vilhelm@gmail.com", new Portrait("Avatar Vilhelm", "https://www.artmajeur.com/medias/standard/y/u/yuriy-ivashkevych/artwork/8931727_image.jpeg?v=1454165692"));
        var authorDefault = new Author("Default Author", "default@gmail.com", new Portrait("Default Author", "https://static.cambridge.org/resource/id/urn:cambridge.org:id:binary:82131:20160618001700979-0838:00439figu16.png?pub-status=live"));

        return [gilgamesh, gawain, eirik, vilhelm, authorDefault];
    }

    //Select del formulario de agregar imagen para seleccionar la categoria
    createOptionsCategorys() {
        var option;
        var text;
        var categories = galeria.getCategorys();
        for (var i = 0; i < categories.length; i++) {
            option = document.createElement('option');
            option.setAttribute('value', '' + categories[i].title + '');
            text = document.createTextNode('' + categories[i].title + '');
            option.appendChild(text);
            document.getElementById('categoriaImagenAgregada').appendChild(option);
        }
    }
    //Select del formulario de agregar imagen para seleccionar el autor
    createOptionsAuthors() {
        var option;
        var text;
        var authors = galeria.getAuthors();
        for (var i = 0; i < authors.length; i++) {
            option = document.createElement('option');
            option.setAttribute('value', '' + authors[i].nickname + '');
            text = document.createTextNode('' + authors[i].nickname + '');
            option.appendChild(text);
            document.getElementById('autorImagenAgregada').appendChild(option);
        }
    }

}

