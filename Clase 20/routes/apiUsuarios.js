const express = require("express");
const router =  express.Router();
const {faker} = require("@faker-js/faker")

router.get("/",(req,res)=>{

    let cant = req.query.cant || 50;
    const respuesta = [];
    for (let index = 0; index <cant; index++) {
        respuesta.push({nombre:faker.name.firstName()});
        
    }
    res.status(200).json({respuesta:respuesta});
});


module.exports = router;