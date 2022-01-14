const express = require("express");
const path = require("path");
const app = new express();
const PORT = 3000;
const handlebars = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app.use("/public",express.static(path.join(__dirname, 'public')));

app.engine("hbs",handlebars.engine({
    extname : ".hbs",
    defaultLayout: "layout.hbs",
    layoutsDir:__dirname + "/views/layouts",
    partialsDir:__dirname + "/views/partials"

}));


app.set("views", "./views/"); // defino la ruta de vistas
app.set("view engine", "hbs"); // defino que tipo de archivo va a usar el motor



app.get("/",(req,res)=>{
    

    res.render("index",{nombre:"Alejandro",apellido:"Bongioanni"});


});

app.listen(PORT,()=>console.log(`App escuchando en puerto ${PORT}`));
