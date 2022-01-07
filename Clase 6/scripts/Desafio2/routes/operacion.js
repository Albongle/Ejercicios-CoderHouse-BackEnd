const express = require('express');
const router = express.Router();

router.get("/:suma",(req,res)=>{
    let arrSuma = req.params.suma.split("+");
    let resultadoSuma = arrSuma.reduce((acum,previo)=>acum+=parseInt(previo),0);
    res.status(200).send({resultadoSuma});

});




module.exports = router;