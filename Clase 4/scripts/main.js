const fs = require('fs');
// try{
//     fs.writeFileSync("fyh.txt",new Date(Date.now()).toString(),'utf-8'); // escribo
//     let dato= fs.readFileSync("fyh.txt","utf-8"); // leo
//     console.log(`El archivo contiene ${dato}`);
// }
// catch(error){
//     console.log(error.message);
// }

const info = {
    contenidoStr: "contenido del archivo leído en formato string",
    contenidoObj: "contenido del archivo leído en formato objeto",
    size: 1000
}

try{
    fs.readFile("./package.json","utf8",(error, dato)=>{
        if(!error){
            info.contenidoStr = dato;
            info.contenidoObj = JSON.parse(dato);
            info.size = dato.length;
            fs.writeFile("./info.txt", JSON.stringify(info),"utf-8", error=>console.error(error));
            // console.log(info);
        }
    });
}
catch(error){
    console.log(error.message);
}


fs.promises.readFile("./info.txt","utf-8").then(resultado=>{
    const infoDos = JSON.parse(resultado);
    infoDos.contenidoObj.author = "CodherHouse";
    console.log(infoDos.contenidoObj);
    return fs.promises.writeFile("./package.json.coder",JSON.stringify(infoDos));

})
.then(resp => console.log("Archivo Guardado"))
.catch(error => console.error(error));