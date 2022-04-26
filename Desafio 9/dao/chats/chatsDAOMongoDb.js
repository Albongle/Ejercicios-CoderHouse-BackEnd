const GestorDbMongo = require("../../contenedores/gestorDbMongo");
require("dotenv").config();
const esquema = {

  name:{type:String, require:true, max:50}, 
  user:{type:String, require:true, max:50}, 
  message:{type:String, require:true}
}

module.exports = class ChatsDAO extends GestorDbMongo{

    constructor(){
        super(process.env.STRING_CONECTION,"chats",esquema);   
      }
}