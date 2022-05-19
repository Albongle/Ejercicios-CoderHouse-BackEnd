import express from "express";

const app = new express();

app.get('/',(req,res)=>{
    res.send("Hello word");
})

app.listen(3000, () => {
    console.log("Api en el puerto 3000");
});