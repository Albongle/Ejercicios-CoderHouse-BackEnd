const mongoose = require("mongoose");
const model = require("./data/models/usuarios");

Crud();

async function Crud()
{
    try
    {
        //conexion a la BD
        const URL = `mongodb://localhost:27017/usuarios`;
        let rta = await mongoose.connect(URL, {});
        console.log(`base de datos conectada`);

        //create
        const usuario = {nombre:"Alejandro",apellido:"Bongioanni",email:"email@mail.com.ar",password:123456};
        const usuarioSaveModel = new model(usuario);
        let usuarioSave  = await usuarioSaveModel.save();
        console.log(`Usuario Creado`);
        console.log(usuarioSave);
        

    }catch(error)
    {
        console.log(error);
    }

}