const express = require("express");
const app = express();
const path = require("path");
const socketIo= require("socket.io");
const apiProducto = require("./routes/apiProducto");
const apiCarrito = require("./routes/apiCarrito");
const apiFaker = require("./routes/apiProductos-test");
const mdw = require("./middlewares/middlewares");



//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/api/productos", apiProducto);
app.use("/api/carrito", apiCarrito);
app.use("/api/productos-test", apiFaker);
app.use(mdw.rutaNoImplementada);
//settigns
app.set("port",process.env.PORT || 3000);


//listen

const server = app.listen(app.get("port"),()=> console.log(`App corriendo en ${app.get("port")}`));

//SocketIO y Creaccion de la BD para almacenar los mensajes


const io = socketIo(server);
const columnas={strings:[{name:"idSocket",length:50},{name:"user",length:50},{name:"message", length:255}]};
const database = require("./data/database");
const gestorDataBase = new database({client:"sqlite3", connection:{filename:"./sqlite/myDataBases.sqlite3"},useNullAsDefault:true});

gestorDataBase.createTable("chats",columnas).then(()=>{

    io.on("connection",(socket)=>{
        console.log("Usuario conectado con ID", socket.id);    
        socket.on("chat:tiping",(data)=>{
            socket.broadcast.emit("chat:tiping", data);
        });
        socket.on("new:message",async (data)=>{
            console.log(data)
            io.sockets.emit("new:message", data);
            
            gestorDataBase.insertElements(data)
            .then(()=>gestorDataBase.selectAllElements()
            .then(message=> console.log(message))); 
        });
    });
});

app.io = io;