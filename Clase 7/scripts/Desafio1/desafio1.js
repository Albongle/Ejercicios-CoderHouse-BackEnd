const exp = require('constants');
const express = require('express');
const app = new express();
const port = 3000;
const frase = "Hola Mundo como estan";
app.use(express.json()); // para poder parsear el body
app.use(express.urlencoded({extended:false}));

app.get('/api/frase',(req,res)=>{

    res.send({frase});
})
app.get('/api/letras/:num',(req,res)=>{
    let num = parseInt(req.params.num);
    isNaN(num) || num < 1 || num > frase.length ? res.send({error: "El parametro esta fuera de rango"}) : res.send(frase[num-1]);
})
app.get('/api/palabras/:num',(req,res)=>{
    let num = parseInt(req.params.num);
    let arrFrase = frase.split(" ");
    isNaN(num) || num < 1 || num > arrFrase.length ? res.send({error: "El parametro esta fuera de rango"}) : res.send(arrFrase[num-1]);
})


app.post('/api/post',(req,res)=>{

    console.log(req.body);
    res.send("ok");
})


app.listen(port,()=>console.log(`App listen en puerto ${port}`));