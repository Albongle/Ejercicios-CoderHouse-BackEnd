"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(numA, numB) {
        this.numA = numA;
        this.numB = numB;
    }
    Suma.prototype.operar = function () {
        return this.numA + this.numB;
    };
    return Suma;
}());
exports.Suma = Suma;
