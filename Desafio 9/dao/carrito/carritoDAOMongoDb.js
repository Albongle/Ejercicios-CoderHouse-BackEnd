const GestorDbMongo = require("../../contenedores/gestorDbMongo");
require("dotenv").config();
const esquema = {
  productos:{type:Array, require:true},
}

module.exports = class CarritoDAO extends GestorDbMongo{

    constructor(){
        super(process.env.STRING_CONECTION,"carrito",esquema);   
      }
}