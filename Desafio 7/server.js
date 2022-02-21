const express = require("express");
const app = express();
const path = require("path");
const socketIo= require("socket.io");
const apiProducto = require("./routes/apiProducto");
const apiCarrito = require("./routes/apiCarrito");
const mdw = require("./middlewares/middlewares");



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

//SocketIO


const io = socketIo(server);
io.on("connection",(socket)=>{
    console.log("Usuario conectado con ID", socket.id);
    
    socket.on("chat:tiping",(data)=>{
        socket.broadcast.emit("chat:tiping", data);
    });
    socket.on("new:message",(data)=>{
        io.sockets.emit("new:message", data);
    });
});


// const columnas=
// {
//     strings:[{name:"usuario",length:50},{name:"mensaje", length:255}],

// };
// const database = require("./data/database");
// const gestor = new database({client:"sqlite3", connection:{filename:"./sqlite/myDataBases.sqlite3"}});
// gestor.createTable("chats",columnas);


app.io = io;