var Color = /** @class */ (function () {
    function Color() {
        var _this = this;
        this.generate = function () { return console.log("".concat(_this.red, " ").concat(_this.green, " ").concat(_this.blue)); };
        this.red = Color.random();
        this.blue = Color.random();
        this.green = Color.random();
    }
    Color.prototype.algo = function () {
        return Promise.resolve("Hola Mundo");
    };
    Color.random = function () { return Math.floor(Math.random() * 255); };
    return Color;
}());
var color = new Color();
color.generate();
color.algo().then(function (dato) { return console.log(dato); });
