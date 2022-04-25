module.exports = class Carrito{
    static #idCarrito = 0;
    #id;
    #arrCarrito;

    constructor(){
        this.#id =Carrito.#idCarrito++;
        this.#arrCarrito = new Array();
    }

    get id(){
        return this.#id;
    }
    get productos (){
        return this.#arrCarrito;
    }
    set productos (value){
        if(value!= undefined){
            this.#arrCarrito.push(value);
        }
    }
    deleteProducto(id){
        if(id != undefined && parseInt(req.params.id )!= NaN && this.#arrCarrito>0){
            let pos = this.#arrCarrito.findIndex( c =>  c.id === id);
            if(pos>-1){
                this.#arrCarrito.slice(pos,1);
                return true;
            }
        }
        return false;
    }


    
} 