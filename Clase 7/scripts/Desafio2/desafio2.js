const express = require("express");
const app = new express();
const api = require("./routes/api.js");
const sumar = require("./routes/sumar.js");
const operacion = require("./routes/operacion.js");
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api", api);
app.use("/api/sumar", sumar);
app.use("/api/operacion", operacion);


app.listen(port,()=>{
    console.log(`app escuchando en el puerto ${port}`)
})


