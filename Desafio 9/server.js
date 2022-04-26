const express = require("express");
const app = express();
const path = require("path");
const socketIo= require("socket.io");
const apiProducto = require("./routes/apiProducto");
const apiCarrito = require("./routes/apiCarrito");
const mdw = require("./middlewares/middlewares");
const ChatsDAO = require("./dao/chats/chatsDAOMongoDb");
require("dotenv").config();


//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/api/productos", apiProducto);
app.use("/api/carrito", apiCarrito);
app.use(mdw.rutaNoImplementada);
//settigns
app.set("port",process.env.PORT || 3000);


//listen

const server = app.listen(app.get("port"),()=> console.log(`App corriendo en ${app.get("port")}`));

//SocketIO y Creaccion de la BD para almacenar los mensajes


const io = socketIo(server);



const gestorChatsDao = new ChatsDAO();



io.on("connection",(socket)=>{
    console.log("Usuario conectado con ID", socket.id);    
    socket.on("chat:tiping",(data)=>{
    socket.broadcast.emit("chat:tiping", data);
    });
    socket.on("new:message",async (data)=>{
        console.log(data)
        io.sockets.emit("new:message", data);
        gestorChatsDao.addElementos(data)
        .then(()=>gestorChatsDao.getAllElementos()
        .then(message=> console.log(message))); 
     });
});


app.io = io;