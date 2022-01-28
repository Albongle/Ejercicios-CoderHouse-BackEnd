const express = require("express");
const router = express.Router();
const obj ={}; 
router.get('/:frase',(req,res)=>{

    obj.frase = req.params.frase;
    res.send(obj);

});



module.exports.router = router;
module.exports.obj = obj;