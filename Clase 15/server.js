const express = require("express");
const app = express();
const db = require("./data/databases");



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//settings
app.set("port",process.env.PORT || 3000);

// db.createTable("autos"); creo tabla


//db.insertAutos("autos",{name:"Peugeot 405", price: 100}); inserto
// db.insertAutosArray("autos",[{name:"Ford", price: 200},{name:"Fiat", price: 50},{name:"VW", price: 200}]); inserto


db.selectAutos("autos");
db.selectAutosById("autos",2);
db.selectAutosById2("autos",1);
db.selectAutosById3("autos",5);

db.selectAutosIn("autos","id",[1,3,5]);
//listen
app.listen(app.get("port"),()=>console.log(`App listen en port ${app.get("port")}`));