const GestorDbMongo = require("../../contenedores/gestorDbMongo");
require("dotenv").config();
const esquema = {
  productos:{type:Array, require:true},
}

module.exports = class CarritoDAOMongo extends GestorDbMongo{

    constructor(){
        super(process.env.STRING_CONECTION,"carrito",esquema);   
      }
}