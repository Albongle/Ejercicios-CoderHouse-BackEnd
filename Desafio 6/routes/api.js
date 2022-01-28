const express = require("express");
const controller = require("../modules/controllerProducto");
const router = express.Router();

const controllerProducto = new controller();

router.get("",(req,res)=>{

    res.status(200).json(controllerProducto.getProductos());
});
router.get("/:id",(req,res)=>{
    let {id} = req.params;
    id = parseInt(id);
    let obj = controllerProducto.getProductoById(id);
    obj != null ? res.status(200).json(obj): res.status(400).json({error:'Producto no encontrado'});
});

router.post("",(req,res)=>{
    let obj = {...req.body};
    let objRetorno = controllerProducto.setProducto(obj);
    objRetorno != null ? res.status(200).json(obj) : res.status(406).json({error:'Error en la carga del producto'});
});

router.put("/:id",(req,res)=>{
    let {id} = req.params;
    let obj = {...req.body};
    id = parseInt(id);
    controllerProducto.updateProducto(id,obj) ? res.status(200).json({status:` Producto con Id ${id} actualizado`}) : res.status(406).json({error:'Producto no encontrado'});
});

router.delete("/:id",(req,res)=>{

    let {id} = req.params;
    id = parseInt(id);
    controllerProducto.deleteProducto(id) ? res.status(200).json({status:` Producto con Id ${id} eliminado`}) : res.status(406).json({error:'Producto no encontrado'});
});

module.exports = router;