const express = require("express");
const router = express.Router();
const arrPersonas = [];
const mdw = require("../middleware/middleware.js");
const multer = require("multer");



let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    }, 
    filename: function(req,file,cb){
        console.log(file);
        cb(null,file.fieldname+'-'+Date.now()+"."+file.originalname.split(".")[1]);
    }
}); // configuras multer

const upload = new multer({storage}); // instacion con el objeto


router.get("/",(req, res)=>{
    res.status(200).send(JSON.stringify(arrPersonas));
});

router.post("/carga",mdw.chekAccesAdmin,(req,res)=>{

    if(req.body.nombre !== undefined && req.body.apellido !== undefined && req.body.edad !== undefined){
        let obj = req.body;
        arrPersonas.push(obj);
        res.status(200).send({status:"ok",datos:arrPersonas});
    }
    else{
        res.status(404).send({error:"No se recibio alguno de los parametros para la carga de elementos"});
    }

});

router.post("/",upload.single("archivo"),(req,res, next)=>{
    const file = req.file;

    !file ?  res.status(400).send({error:"no se recibio un archivo"}) :  res.send(file);
});




module.exports = router;