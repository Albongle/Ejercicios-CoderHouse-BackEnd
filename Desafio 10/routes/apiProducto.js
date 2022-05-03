const express = require("express");
const router = express.Router();
const producto = require("../modules/producto");
const gestorProducto = new producto();

router.get("",async (req,res)=>{

    res.status(200).json(await gestorProducto.getProductos());
});
router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    id = parseInt(id);
    let obj = await     gestorProducto.getProductoById(id);
    obj != null ? res.status(200).json(obj): res.status(400).json({error:'Producto no encontrado'});
});

router.post("",async (req,res)=>{
    let obj = {...req.body};
    let objRetorno = await gestorProducto.setProducto(obj);

    if(objRetorno!=null){
        
        req.app.io.sockets.emit("refresh-productos",await gestorProducto.getProductos());
        res.status(200).json(obj);
    }else{
        res.status(406).json({error:'Error en la carga del producto'});
    }
});

router.put("/:id",async (req,res)=>{
    let {id} = req.params;
    let obj = {...req.body};
    id = parseInt(id);
    if(await gestorProducto.updateProducto(id,obj)){
        
        req.app.io.sockets.emit("refresh-productos",await gestorProducto.getProductos());
        res.status(200).json(obj);
    }else{
        res.status(406).json({error:'Error en la actualizacion del producto'});
    }
});

router.delete("/:id",async (req,res)=>{
    
    let {id} = req.params;
    id = parseInt(id);
  
    if( await gestorProducto.deleteProducto(id)){
        req.app.io.sockets.emit("refresh-productos",await gestorProducto.getProductos());
        res.status(200).json({status:`ok`,message:`Producto con Id ${id} eliminado`});
    }else{
        res.status(406).json({error:'Producto no encontrado'});
    }
});



module.exports = router;