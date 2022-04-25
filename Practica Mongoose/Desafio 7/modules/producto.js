const database = require("../data/database");
const columnas=
{
    strings:[{name:"urlImg",length:255},
    {name:"desc",length:255},{name:"nombre",length:50},
    {name:"marca",length:50},
    {name:"gama",length:50},{name:"tipo",length:50}],
    floats:["precio"],
    integers:["stock","cuotas"]
};

module.exports = class Producto{

  static #arrProductos;
  #gestorDataBase;
  constructor(){
    let productos = require("./productos.json"); // antes de construir la bd, recupero un Json para insertarle datos
    this.#gestorDataBase = new database(
      {
        client:"mysql",
        connection:
        {
          host:"127.0.0.1",
          user:"root",
          password:"",
          database:"coderhouse"
        },
        pool:{min:0, max:7}
      });

    this.#gestorDataBase.createTable("productos",columnas)
    .then(()=>{
      this.#gestorDataBase.insertElements(productos);
    });
    


  }

   async getProductos(){
  
      return await this.#gestorDataBase.selectAllElements();
   }
   async getProductoById(id){
       return id != undefined && typeof(id) === "number" ? await this.#gestorDataBase.selectElementById(id): null;
   }

   async setProducto(objeto){
       if(Producto.#checkAttributes(objeto)){
           
           let id = await this.#gestorDataBase.insertElements(objeto);
           let objReturn = {id:id[0],...objeto};
           return objReturn;
       }
       return null;
   }
   async updateProducto(id,objeto){


       if(Producto.#checkAttributes(objeto) && typeof(id) === "number"){
          return await this.#gestorDataBase.updateElement(id,objeto);
       }
       return null;
   }
   async deleteProducto(id){

       if(id != undefined && typeof(id) === "number"){
        let resultado = await this.#gestorDataBase.daleteElement(id);
        return resultado === 1 ? true : false; 
       }
       return false;
   }

   static #checkAttributes(objeto){
  
     return (objeto.urlImg != undefined && objeto.urlImg != "") && 
     (objeto.precio != undefined && parseInt(objeto.precio) != NaN) &&
     (objeto.desc != undefined && objeto.marca !=undefined && objeto.gama != undefined 
       && objeto.tipo != undefined && objeto.nombre != undefined) &&
     (objeto.stock != undefined && parseInt(objeto.stock) != NaN) && 
     (objeto.cuotas != undefined && parseInt(objeto.cuotas) != NaN);
   }

}