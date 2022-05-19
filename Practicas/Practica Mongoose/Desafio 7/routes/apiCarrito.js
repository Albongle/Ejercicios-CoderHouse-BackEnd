const express = require("express");
const router = express.Router();
const carrito = require("../modules/carrito");
const arrayCarritos = new Array();


router.post("", (req, res)=>{
    const objeto = new carrito();
    arrayCarritos.push(objeto);
    res.status(200).json({idCarrito:objeto.id});

});
router.delete("/:id", (req, res)=>{
    if(req.params.id != undefined && parseInt(req.params.id )!= NaN && arrayCarritos.length>0){
        let pos = arrayCarritos.findIndex( c =>  c.id === parseInt(req.params.id));
        if(pos>-1){
            arrayCarritos.slice(pos,1);
            res.status(200).json({status:"ok", message:`Se elimino el carrito con id ${req.params.id}`});
        }else{
            res.status(406).json({error:'Carrito no encontrado'});
        }
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }
});
router.get("/:id/productos", (req, res)=>{
    if(req.params.id != undefined && parseInt(req.params.id )!= NaN && arrayCarritos.length>0){
        let carrito = arrayCarritos.find( c =>  c.id === parseInt(req.params.id));
        if(carrito){
            res.status(200).json(carrito.productos);
        }else{
            res.status(406).json({error:'Carrito no encontrado'});
        }
    }
    else{
        res.status(406).json({error:'Carrito no encontrado'});
    }
});
router.post("/:id/productos", (req, res)=>{

    if(req.params.id != undefined && parseInt(req.params.id )!= NaN && arrayCarritos.length>0){
        let carrito = arrayCarritos.find( c =>  c.id === parseInt(req.params.id));
        if(carrito){
            let producto = {...req.body};
            carrito.productos = producto;
            res.status(200).json(carrito.productos);
        }else{
            res.status(406).json({error:'Carrito no encontrado'});
        }
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }

});
router.delete("/:id/productos/:id_productos", (req, res)=>{

    if(req.params.id != undefined && parseInt(req.params.id )!= NaN && arrayCarritos.length>0 &&
    req.params.id_productos != undefined && parseInt(req.params.id_productos )!= NaN){
        let carrito = arrayCarritos.find( c =>  c.id === parseInt(req.params.id));
        if(carrito){
            if(carrito.deleteProducto()){
                res.status(200).json(carrito);
            }
            else{
                res.status(406).json({error:'Producto no encontrado'});
            }
        }else{
            res.status(406).json({error:'Carrito no encontrado'});
        }
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }
});


module.exports = router;