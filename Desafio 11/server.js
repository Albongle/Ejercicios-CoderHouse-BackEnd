const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const apiUsuario = require("./routes/apiUsuario");
require("dotenv").config();


//settings
app.set("port",process.env.PORT || 3000);


//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));


//routes

app.use("/api/usuario",apiUsuario);

const server = app.listen(app.get("port"),()=>console.log(`servidor escuchando en ${app.get("port")}`));

server.on("error", (error)=> console.log(`error en servidor ${error}`));