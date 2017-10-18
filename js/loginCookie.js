var usuarioLogeado = 'user_login';
var usuarioNoLogeado = '';


function estaLogeado() {
    return Cookie.exists(usuarioLogeado) && Cookie.getValue(usuarioLogeado) != usuarioNoLogeado;
}

function login() {
    var usuarios = [
        {username: 'gilgamesh', password: 'gilgamesh'},
        {username: 'gawain', password: 'gawain'},
        {username: 'eirik', password: 'eirik'},
        {username: 'vilhelm', password: 'vilhelm'},
    ];
    var userName = document.getElementById("nameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    function EsUsuarioValido(userName, password) {
        return usuarios.filter(u => u.username == userName && u.password == password).length > 0;
    }

    if (EsUsuarioValido(userName, password)) {
        var cookie = new Cookie(usuarioLogeado, userName);
        cookie.save();
        document.getElementById('sesion').textContent = Cookie.getValue(usuarioLogeado);
        hiddenLogin();
    } else {
        throw new UserExistException();
    }
}
function cerrarSesion() {

    document.getElementById('sesion').textContent = "Sesion";
    visibleLogin();

    const cookie = Cookie.getCookie(usuarioLogeado);
    cookie.setValue(usuarioNoLogeado);
    cookie.save();
    cookie.delete();
    pop.populate(galeria.getAllImages());
}