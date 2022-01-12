const express = require("express");
const path = require('path');
const app = new express();
const PORT = 8080;
const apiProductos = require("./routes/apiProductos");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/productos", apiProductos);

app.use("/public",express.static(path.join(__dirname, 'public')));





app.listen(PORT,()=>console.log(`App escuchando en ${PORT}`));