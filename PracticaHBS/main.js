const express = require("express");
const app = new express();
const PORT = 3000;
const handlebars = require("express-handlebars");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine("hbs",handlebars.engine({
    extname : ".hbs",
    defaultLayout: "layout.hbs",
    layoutsDir:__dirname + "/views/layouts",
    partialsDir:__dirname + "/views/partials"

}));

app.use("/public",express.static("public"));

app.set("views", "./views/"); // defino la ruta de vistas
app.set("view engine", "hbs"); // defino que tipo de archivo va a usar el motor


app.get("/",(req,res)=>{
    
    res.render("index", {persona:"Alejandro"});


});


app.listen(PORT, ()=>console.log(`App escuchando en ${PORT}`));

