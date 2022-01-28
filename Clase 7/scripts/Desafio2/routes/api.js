const express = require("express");
const router = express.Router();

router.post("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})});
router.put("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})});
router.delete("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})});

module.exports = router;