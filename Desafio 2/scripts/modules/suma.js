"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.resultado = void 0;
var calculador_js_1 = require("./calculador.js");
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(numA, numB) {
        return _super.call(this, numA, numB) || this;
    }
    Suma.prototype.operar = function () {
        return this.numA + this.numB;
    };
    return Suma;
}(calculador_js_1.Calculador));
var resultado = function (numA, numB) {
    var cuenta = new Suma(numA, numB);
    return cuenta.operar();
};
exports.resultado = resultado;
