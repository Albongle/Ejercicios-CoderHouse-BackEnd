const express = require("express");
const app = express();
const rutas = require("./routes/apiUsuarios");

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//rutas
app.use("/api/usuarios",rutas);

app.get("/",(req,res)=>res.status(200).send("Api mocks"));

const server = app.listen(app.get("port"),()=>console.log(`App corriendo en puerto ${app.get("port")}`));

server.on("error",(error)=> console.error(error));