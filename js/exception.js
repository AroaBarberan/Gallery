function Exception() {
    this.name = "Exception";
    this.message = "Error. Exception";
    this.toString = function () {
        return this.name + " -> " + this.message;
    };
}
Exception.prototype = new Error();

function ValueIsEmpty() {
    this.name = "ValueIsEmpty";
    this.message = "Error: The parameter is empty";
}
ValueIsEmpty.prototype = new Exception();

function EmailException(){
    this.name = "EmailException";
    this.message = "Error. The parameter is not correct";
}
EmailException.prototype = new Exception();

function CategoryNullException(){
    this.name = "CategoryNullException";
    this.message = "Error. The categorys cant not be null";
}
CategoryNullException.prototype = new Exception();

function CategoryExistException(){
    this.name = "CategoryExistException";
    this.message = "Error. The categorys exist";
}
CategoryExistException.prototype = new Exception();

function CategoryNotRegistered(){
    this.name = "CategoryNotRegistered";
    this.message = "Error. The Category is not registered";
}
CategoryNotRegistered.prototype = new Exception();

function ImageNullException(){
    this.name = "ImageNullException";
    this.message = "Error. The image cant not be null";
}
ImageNullException.prototype = new Exception();

function ImageNotExistException(){
    this.name = "ImageNotExistException";
    this.message = "Error. The image not exist";
}
ImageNotExistException.prototype = new Exception();

function AuthorNullException(){
    this.name = "AuthorNullException";
    this.message = "Error. The getAuthors cant not be null";
}
AuthorNullException.prototype = new Exception();

function AuthorNotExistException(){
    this.name = "AuthorNotExistException";
    this.message = "Error. The getAuthors not exist";
}
AuthorNotExistException.prototype = new Exception();

function AuthorExistException(){
    this.name = "AuthorExistException";
    this.message = "Error. The getAuthors exist";
}
AuthorExistException.prototype = new Exception();
function UserExistException(){
    this.name = "UserExistException";
    this.message = "Error. The user no exist";
}
UserExistException.prototype = new Exception();
