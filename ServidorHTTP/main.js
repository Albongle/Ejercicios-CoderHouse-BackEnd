const http = require("http");
const PORT = 3000;
const server = http.createServer((req,res)=>{

    req.method === "GET" ? res.end("Hola Mundo") : res.end("No OK"); 

});


const connectedServer = server.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);

});