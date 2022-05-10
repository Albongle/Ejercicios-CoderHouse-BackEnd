const express = require("express");
const router = express.Router();
const session= require("express-session");
const cookieParse = require("cookie-parser");
const MongoStore = require("connect-mongo");
require("dotenv").config();

router.use(cookieParse());
router.use(session({

    store:MongoStore.create({mongoUrl:process.env.STRING_CONNECTION, mongoOptions:{useNewUrlParser:true, useUnifiedTopology:true}}),
    secret:"shhhhhhhhhhhhhhhhhhhhhh",
    resave:false,
    saveUninitialized:false,
    // cookie:{
    //     maxAge:60000
    // }

}));

router.get("/login",(req, res)=>{
    res.sendStatus(200);
})

module.exports = router;