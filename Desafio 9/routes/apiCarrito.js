const express = require("express");
const router = express.Router();
const {getManagerCarrito:carritoDAO} = require("../dao/managerDAO");
let gestorCarrito;
carritoDAO().then(modulo=> gestorCarrito = new modulo.default());


router.post("", async (req, res)=>{
    const objeto = req.body;
    const respuesta = await gestorCarrito.addElementos({productos:objeto});
    res.status(200).json({idCarrito:respuesta});

});
router.delete("/:id", async (req, res)=>{
    let {id}=req.params;
    if(await gestorCarrito.deleteElementoById(id)){
        res.status(200).json({status:"ok", message:`Se elimino el carrito con id ${id}`});
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }
});
router.get("/:id/productos", async (req, res)=>{
    let {id}=req.params;
    const respuesta = await gestorCarrito.getElementoById(id);
    console.log(respuesta);
    if(respuesta != null){

        res.status(200).json(respuesta.productos);
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }
});
router.post("/:id/productos",async (req, res)=>{

    let {id}=req.params;
    const objeto = req.body;
    if(await gestorCarrito.updateElemento(id, {productos:objeto})){
        res.status(200).json({status:"carrito actualizado"});
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }

});
router.delete("/:id/productos/:id_productos",async (req, res)=>{

    let {id,id_productos}=req.params;
    const respuesta = await gestorCarrito.getElementoById(id);
    if(respuesta != null){
        let indice = respuesta.productos.findIndex(x=> x._id=== id_productos);
        if(indice>0){
            const resultado = respuesta.productos.splice(indice,1);
            await gestorCarrito.updateElemento(id,{productos:resultado});
            res.status(200).json({status:"ok", message:"carrito actualizado"});
        }else{
            res.status(406).json({error:'Producto no encontrado en el carrito'});
        }
    }else{
        res.status(406).json({error:'Carrito no encontrado'});
    }

});


module.exports = router;