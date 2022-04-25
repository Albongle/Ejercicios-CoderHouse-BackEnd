const GestorDbSqlite = require("../../contenedores/gestorDbSqLite");
require("dotenv").config();

const esquema=
{
    strings:[{name:"urlImg",length:255},
    {name:"desc",length:255},{name:"nombre",length:50},
    {name:"marca",length:50},
    {name:"gama",length:50},{name:"tipo",length:50}],
    floats:["precio"],
    integers:["stock","cuotas"]
};

module.exports = class ProductosDAO extends GestorDbSqlite{

  constructor(){
    super();
    this.crearTabla("productos",esquema);
  }
}