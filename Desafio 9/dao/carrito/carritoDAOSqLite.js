const GestorDbSqLite = require("../../contenedores/gestorDbSqLite");
require("dotenv").config();
const esquema=
{
    strings:[{name:"productos",length:255}],
};

module.exports = class CarritoDAO extends GestorDbSqLite{

    constructor(){
        super();
        this.crearTabla("carrito",)   
      }
}