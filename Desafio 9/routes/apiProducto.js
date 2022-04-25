const express = require("express");
const router = express.Router();
const {getManagerProductos:productosDAO} = require("../dao/managerDAO");
let gestorProductos;
productosDAO().then(modulo=> gestorProductos = new modulo.default());



router.get("",async (req,res)=>{

    res.status(200).json(await gestorProductos.getAllElementos());
});
router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    let obj = await gestorProductos.getElementoById(id);
    obj != null ? res.status(200).json(obj): res.status(400).json({error:'Producto no encontrado'});
});

router.post("",async (req,res)=>{
    let obj = {...req.body};
    let objRetorno = await gestorProductos.addElementos(obj);

    if(objRetorno!=null){
        
        req.app.io.sockets.emit("refresh-productos",await gestorProductos.getAllElementos());
        res.status(200).json(obj);
    }else{
        res.status(406).json({error:'Error en la carga del producto'});
    }
});

router.put("/:id",async (req,res)=>{
    let {id} = req.params;
    let obj = {...req.body};
    if(await gestorProducto.updateElemento(id,obj)){
        
        req.app.io.sockets.emit("refresh-productos",{});
        res.status(200).json(obj);
    }else{
        res.status(406).json({error:'Error en la actualizacion del producto'});
    }
});

router.delete("/:id",async (req,res)=>{
    
    let {id} = req.params;
 
    if(gestorProductos.deleteElementoById(id)){
        req.app.io.sockets.emit("refresh-productos",{});
        res.status(200).json({status:`ok`,message:`Producto con Id ${id} eliminado`});
    }else{
        res.status(406).json({error:'Producto no encontrado'});
    }
});



module.exports = router;