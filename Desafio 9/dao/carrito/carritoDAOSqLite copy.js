const GestorDbMySql = require("../../contenedores/gestorDbMySql");
require("dotenv").config();
const esquema=
{
    strings:[{name:"productos",length:255}],
};

module.exports = class CarritoDAO extends GestorDbMySql{

    constructor(){
        super();
        this.crearTabla("carrito",)   
      }
}