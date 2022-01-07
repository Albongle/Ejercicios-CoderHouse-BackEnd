const express = require('express');
const router = express.Router();

router.get("/:numA/:numB",(req,res)=>{

    let opA = parseInt(req.params.numA);
    let opB = parseInt(req.params.numB);
    !isNaN(opA) && !isNaN(opB) ? res.status(200).send({resultadoSuma: opA+opB}) : res.status(404).send({error:"Datos invalidos"});
});


router.get("/",(req,res)=>{
    let query = req.query;
    let resultadoSuma = 0;
    console.log(query);
    for (const num in query) {
        resultadoSuma+= parseInt(query[num]);
    }
    !isNaN(resultadoSuma) ? res.status(200).send({resultadoSuma}) : res.status(404).send({error:"Datos invalidos"});
});


module.exports = router;