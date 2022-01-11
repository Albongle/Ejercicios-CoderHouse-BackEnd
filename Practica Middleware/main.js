const myLogger = (req,res,next)=>{
    console.log("Logged");
    next();
}
const express = require("express");
const app = new express();
const port = 8080;

app.use(myLogger);

app.get("/",(req,res)=>{ res.send("Hola Mundos");});

app.listen(port,()=>{
    console.log(`App escuchando en puerto ${port}`);
});
