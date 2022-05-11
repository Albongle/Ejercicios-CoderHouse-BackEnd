const express = require("express");
const router = express.Router();
const session= require("express-session");
const cookieParse = require("cookie-parser");
const MongoStore = require("connect-mongo");
const path = require("path");
const mdw = require("../middlewares/middlewares");
require("dotenv").config();
router.use(cookieParse());
router.use(session({

    store:MongoStore.create({mongoUrl:process.env.STRING_CONNECTION, mongoOptions:{useNewUrlParser:true, useUnifiedTopology:true}}),
    secret:"shhhhhhhhhhhhhhhhhhhhhh",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:600000
    }

}));

router.get("/",mdw.validarSession,(_req, res)=>{

    res.status(200).sendFile(path.join(__dirname,"..","public/index.html"));

})

router.get("/login",(_req, res)=>{

    res.status(200).sendFile(path.join(__dirname,"..","public/pages/login.html"));
})  

router.post("/login",(req, res)=>{

    let {usuario} = req.body;   
    if(usuario){
        req.session.usuario = {nombre:usuario};
        return res.status(200).json({usuario});
    }

    return res.status(401).json({status:"error", });
})
router.post("/logout",mdw.validarSession,(req, res)=>{

    req.session.destroy();
    res.status(200);
})


module.exports = router;