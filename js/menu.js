class Menu {
    constructor() {
        this.home = document.getElementsByClassName("home");
        this.closeWindows = document.getElementsByClassName("closeWindows");
        this.autoresLink = document.getElementById('autoresLink');
        this.categoriasLink = document.getElementById('categoriasLink');
        this.landscapeLink = document.getElementById('landscapeLink');
        this.portraitLink = document.getElementById('portraitLink');
        this.imagesLink = document.getElementById('imagesLink');

        this.init();
    }

    init() {

        for (var i = 0; i < this.home.length; i++) {
            this.home[i].addEventListener('click', this.homeButton);
        }
        for (var i = 0; i < this.closeWindows.length; i++) {
            this.closeWindows[i].addEventListener('click', this.closedWindows);
        }

        this.autoresLink.addEventListener('click', () => {
            pop.populateAuthors(galeria.getAuthors());
        });
        this.categoriasLink.addEventListener('click', () => {
            pop.populateCategorys(galeria.getCategorys());
        });
        this.landscapeLink.addEventListener('click', () => {
            pop.populate(imagenes.typeLandscape());
        });
        this.portraitLink.addEventListener('click', () => {
            pop.populate(imagenes.typePortrait());
        });
        this.imagesLink.addEventListener('click', () => {
            pop.populate(imagenes.typeImages());
        });
    }

    homeButton() {
        pop.populate(galeria.getAllImages());
    }

    closedWindows() {
        for (var i = 0; i < myWindows.length; i++) {
            myWindows[i].close();
        }
    }
}
