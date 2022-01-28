const express = require("express");
const path = require("path");
const expresshbs = require("express-handlebars");
const {Server : HttpServer} =  require("http");
const {Server : IOServer} =  require("socket.io");


const app = new express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/public", express.static("public"));
//settings
app.engine("hbs",expresshbs.engine({
    defaultLayout:"layout",
    extname: ".hbs",
    layoutsDir: path.join(__dirname,"/views/layouts"),
    partialsDir:path.join(__dirname,"/views/partials")
}));
app.set("port",process.env.PORT || 3000); // puerto desde variable global 
app.set("views","./views/");
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index",{saludo: "WebSockets"});
});

httpServer.listen(app.get("port"),()=>console.log(`App en puerto ${app.get("port")}`));

io.on("connection",(socket)=>{
   
    console.log("Usuario Conectado");
    socket.emit("mi mensaje","Este es mi mensaje desde el servidor");
    socket.on("notificacion", data=>console.log(data));
    
});