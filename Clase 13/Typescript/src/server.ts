import { Superficie } from "./operaciones/superficie";
import { Perimetro } from "./operaciones/perimetro";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("port",process.env.PORT || 3000);
app.get("/",(req,res)=>{

});

app.get("/perimetro",(req,res)=>{

    const {figura,param1,param2} = req.query;
    const response = {calculo:"Perimetro", figura: figura, param1,param2, resultado:NaN};
    switch(figura){
        case "cuadrado":{
            response.resultado = Perimetro.Cuadrado(Number(param1));
            break;
        }
        case "rectangulo":{
            response.resultado = Perimetro.Rectangulo(Number(param1),Number(param2));
            break;
        }
        case "circulo":{
            response.resultado = Perimetro.Circulo(Number(param1));
            break;
        }
        default:{
            res.json({error: `figura ${figura || "indefinida"} invalida`});
            return;
           
        }
    }
    res.json(response);

});
app.get("/superficie",(req,res)=>{

    const {figura,param1,param2} = req.query;
    const response = {calculo:"Superficie", figura: figura, param1,param2, resultado:NaN};
    switch(figura){
        case "cuadrado":{
            response.resultado = Superficie.Cuadrado(Number(param1));
            break;
        }
        case "rectangulo":{
            response.resultado = Superficie.Rectangulo(Number(param1),Number(param2));
            break;
        }
        case "circulo":{
            response.resultado = Superficie.Circulo(Number(param1));
            break;
        }
        default:{
            res.json({error: `figura ${figura} invalida`});
            return;
           
        }
    }
    res.json(response);

});

app.listen(app.get("port"), ()=> console.log(`App corriendo en ${app.get("port")}`));