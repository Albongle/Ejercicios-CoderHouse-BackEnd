"use strict";
exports.__esModule = true;
exports.operacion = void 0;
var operacion = function (numeroA, numeroB, operacion) { return new Promise(function (resolve, reject) {
    if (operacion !== "suma" && operacion !== "resta") {
        reject(new Error("Operacion no permitida"));
    }
    else {
        Promise.resolve().then(function () { return require("../modules/".concat(operacion, ".js")); }).then(function (resultado) {
            var algo = resultado.resultado(numeroA, numeroB);
            resolve(algo);
        });
    }
}); };
exports.operacion = operacion;
