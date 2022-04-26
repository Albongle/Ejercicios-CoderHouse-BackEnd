const GestorDbMongo = require("../../contenedores/gestorDbMongo");
require("dotenv").config();

const esquema = {
  urlImg:{type:String, require:true, max:255},
  desc:{type:String, require:true, max:255},
  nombre:{type:String, require:true, max:100},
  marca:{type:String, require:true, max:50},
  gama:{type:String, require:true, max:50},
  tipo:{type:String, require:true, max:50},
  precio:{type:Number, require:true},
  stock:{type:Number, require:true},
  cuotas:{type:Number, require:true},
};

module.exports = class ProductosDAOMongo extends GestorDbMongo{

  constructor(){
    super(process.env.STRING_CONECTION,"productos",esquema);
    let productos = require("./productos.json"); // antes de construir la bd, recupero un Json para insertarle datos
    this.addElementos(productos);
    console.log("se agrego los prodcutos");
        
  }
}