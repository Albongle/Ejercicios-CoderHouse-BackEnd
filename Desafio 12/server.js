require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const apiUsuario = require("./routes/apiUsuario");
const socketIo= require("socket.io");
const apiFaker = require("./routes/apiProductos-test");
const mdw = require("./middlewares/middlewares");
const ChatsDAO = require("./dao/chatsDAOMongoDb");
const {engine:expressHbs}= require("express-handlebars");


//settings
app.set("port",process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.engine("hbs",expressHbs({
    extname: ".hbs",
    defaultLayout:"layout",
    layoutsDir: path.join(__dirname,"/views/layouts/"),
    partialsDir: path.join(__dirname,"/views/partials/"),
}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "hbs");

//routes
app.use(apiUsuario);
app.use("/api/productos-test", apiFaker);


//middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(mdw.rutaNoImplementada);



const server = app.listen(app.get("port"),()=>console.log(`servidor escuchando en ${app.get("port")}`));

server.on("error", (error)=> console.log(`error en servidor ${error}`));


//SocketIO y Creaccion de la BD para almacenar los mensajes


const io = socketIo(server);
const gestorChatsDao = new ChatsDAO();

io.on("connection",(socket)=>{
    console.log("Usuario conectado con ID", socket.id);    
    socket.on("chat:tiping",(data)=>{
        socket.broadcast.emit("chat:tiping", data);
    });
    socket.on("new:message",async (data)=>{
        io.sockets.emit("new:message", data);
        gestorChatsDao.addElementos(data)
        .then(()=>gestorChatsDao.getAllElementos()
        .then(message=> console.log(message))); 
    });
});
app.io = io;