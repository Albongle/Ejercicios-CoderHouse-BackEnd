// ejercicio 1
// import http from 'http';

// const server = http.createServer((peticion, respuesta)=>{

//     console.log(peticion.method, peticion.url);

//     const hora = new Date();
//     if(hora.getHours()>5 && hora.getHours()<12){
//         respuesta.end(`Buenos dias, son las ${hora.toLocaleTimeString()}`);
//     }else if(hora.getHours()>20){
//         respuesta.end(`Buenas noches, son las ${hora.toLocaleTimeString()}`);   
//     }
//     else{
//         respuesta.end(`Buenos tardes, son las ${hora.toLocaleTimeString()}`);
//     }
// });

// const connectedServer = server.listen(8080,()=>{
    
//     console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);

// });

 // ejercicio 2
import express from 'express';
let visitas = 0;
const app = new express();

app.route('/')
.get((req,res)=>{

    res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1>`);
});

app.route('/visitas')
.get((req,res)=>{
    visitas++;
    res.send(`Cantidad de visitas ${visitas}`);
});

app.route('/fyh')
.get((req,res)=>{
    let fecha =  new Date();
    let objeto = {fyh: `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()} `}
    res.send(objeto);
});




app.listen(8080, () => {
    console.log("Api en el puerto 8080");
});
