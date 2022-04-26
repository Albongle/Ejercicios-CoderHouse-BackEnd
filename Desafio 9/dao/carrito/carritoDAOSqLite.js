const GestorDbSqLite = require("../../contenedores/gestorDbSqLite");
require("dotenv").config();
const esquema=
{
    strings:[{name:"productos",length:255}],
};

module.exports = class CarritoDAOSqlite extends GestorDbSqLite{

    constructor(){
        super();
        this.crearTabla("carrito",esquema);  
      }
}