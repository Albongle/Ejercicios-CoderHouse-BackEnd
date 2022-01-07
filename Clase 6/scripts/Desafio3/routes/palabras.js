const express = require("express");
const router = express.Router();
const frase = require('./frase.js')
router.get('/:pos',(req,res)=>{

    let pos = parseInt(req.params.pos);
    let arrFrase =[];
    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        arrFrase = frase.obj.frase.split(" ");
        !isNaN(pos) && pos > 0 && pos <= arrFrase.length ? res.status(200).send({frase:frase.obj.frase, buscado:arrFrase[pos-1]}) : res.status(404).send({error:"Fuera de rango"});
    }
});

router.post('/',(req,res)=>{

    let arrFrase =[];
    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        arrFrase = frase.obj.frase.split(" ");
        let obj = {fraseInicial:frase.obj.frase};
        arrFrase.push(req.body.palabra);
        let fraseFinal = arrFrase.reduce((acum,previo)=> acum=acum +" "+ previo);
        obj.fraseFinal = fraseFinal;
        obj.pos = arrFrase.length;
        res.status(200).send(obj);
        
    }

});

router.put('/:pos',(req,res)=>{
    let pos = parseInt(req.params.pos);
    let arrFrase =[];
    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        arrFrase = frase.obj.frase.split(" ");
        let obj = {fraseInicial:frase.obj.frase};

        if(!isNaN(pos) && pos > 0 && pos <= arrFrase.length){
            arrFrase[pos-1] =  req.body.palabra;
            let fraseFinal = arrFrase.reduce((acum,previo)=> acum=acum +" "+ previo);
            obj.fraseFinal = fraseFinal;
            obj.pos = pos;
            res.status(200).send(obj);
        }else{
            res.status(404).send({error:"Fuera de rango"});
        }       
    }

});

router.delete('/:pos',(req,res)=>{
    let pos = parseInt(req.params.pos);
    let arrFrase =[];
    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        arrFrase = frase.obj.frase.split(" ");
        let obj = {fraseInicial:frase.obj.frase};
        if(!isNaN(pos) && pos > 0 && pos <= arrFrase.length){
            arrFrase.splice(pos-1,1);
            let fraseFinal = arrFrase.reduce((acum,previo)=> acum=acum +" "+ previo);
            obj.fraseFinal = fraseFinal;
            res.status(200).send(obj);
        }else{
            res.status(404).send({error:"Fuera de rango"});
        }       
    }
});



module.exports = router;