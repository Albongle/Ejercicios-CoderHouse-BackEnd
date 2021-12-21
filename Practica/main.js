const { rejects } = require("assert");
const { resolve } = require("path/posix");

async function hacerUno(){
    console.log("Estoy en hacer Uno");
    let resultado = await hacerDos();
    console.log(resultado);
    console.log("Fin de hacer Uno");
}

function hacerDos(cb){
    console.log("Estoy en hacer Dos");
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Termine");
        }, 4000);
    })

    console.log("Fin de hacer Dos");
}
 let promesa = new Promise((resolve, reject)=>{
     
 });
 

hacerUno();


