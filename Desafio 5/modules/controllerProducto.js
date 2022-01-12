module.exports = class ControllerProducto{
     static #arrProductos = [{
        id: 1,
        title:"Producto 1",
        thumbnail: "/public/images/1.png",
        price:47999,
      },
      {
        id: 2,
        title:"Producto 2",
        thumbnail: "/public/images/2.png",
        price:47999,
      },
      {
        id: 3,
        title:"Producto 3",
        thumbnail: "/public/images/3.png",
        price:47999,
      },
      {
        id: 4,
        title:"Producto 4",
        thumbnail: "/public/images/4.png",
        price:47999,
      },
      {
        id: 5,
        title:"Producto 5",
        thumbnail: "/public/images/5.png",
        price:47999,
      },
];

    getProductos(){
        return  ControllerProducto.#arrProductos.length === 0 ? null : ControllerProducto.#arrProductos;
    }
    getProductoById(id){
        return id != undefined && typeof(id) === "number" ? ControllerProducto.#arrProductos.find(element=> element.id === id): null;
    }

    setProducto(objeto){
        Number.NaN
        if(objeto.title != undefined && 
            (objeto.thumbnail != undefined && objeto.thumbnail != "") && 
            (objeto.price != undefined && parseInt(objeto.price) != NaN)){
            let id = this.#getMaxId();
            id++;
            objeto.id = id;
            let objReturn =  {   
                id:objeto.id,
                title:objeto.title,
                price:objeto.price,
                thumbnail:objeto.thumbnail,
            };
            ControllerProducto.#arrProductos.push(objReturn);
            return objReturn;
        }
        return null;
    }
    updateProducto(id,objeto){

        if(objeto.title != undefined && 
            (objeto.thumbnail != undefined && objeto.thumbnail != "") && 
            (objeto.price != undefined && parseInt(objeto.price) != NaN) && 
            (id != undefined && typeof(id) === "number")){
            let pos = ControllerProducto.#arrProductos.findIndex(element=> element.id === id);
            if( pos > -1){
                ControllerProducto.#arrProductos.splice(pos,1);
                ControllerProducto.#arrProductos.push(
                    {   
                        id:objeto.id,
                        title:objeto.title,
                        price:objeto.price,
                        thumbnail:objeto.thumbnail,
                    }
                );
                return true;
            }
        }
        return false;
    }
    deleteProducto(id){

        if(id != undefined && typeof(id) === "number"){
            let pos = ControllerProducto.#arrProductos.findIndex(element=> element.id === id);
            if( pos > -1){
                ControllerProducto.#arrProductos.splice(pos,1);
                return true;
            }
        }
        return false;
    }

    #getMaxId(){

        return ControllerProducto.#arrProductos.length === 0 ? 0 : ControllerProducto.#arrProductos.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
    }

}