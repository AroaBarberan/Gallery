function Cookie(name, value, exdays = 1) {

    this._name = name
    this._value = value;
    this._exdays = exdays;

    this.setName = function (name) {
        this._name = name;
    }
    this.getName = function () {
        return this._name;
    }

    this.setValue = function (value) {
        this._value = value;
    }
    this.getValue = function () {
        return this._value;
    }

    this.setName = function (exdays) {
        this._exdays = exdays;
    }
    this.getExdays = function () {
        return this._exdays;
    }

    this.save = function () {
        new Cookie.setCookie(this.getName(), this.getValue(), this.getExdays());
    }
    this.delete = function () {
        new Cookie.setCookie(this.getName(), this.getValue(), new Date().getTime() - 1);
    }
}
Cookie.setCookie = function (cname, cvalue, exdays = 20) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

Cookie.getCookie = function (name) {
    const value = Cookie.getValue(name);
    return new Cookie(name, value);
}

Cookie.getValue = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

Cookie.exists = function (name) {
    var cookie = Cookie.getValue(name);
    return cookie != "";
}



