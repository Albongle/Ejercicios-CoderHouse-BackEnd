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
        const usuario = {nombre:"Ale",apellido:"Bongio",email:"email@mail.com.ar",password:12334567};
        const usuarioSaveModel = new model(usuario);
        let usuarioSave  = await usuarioSaveModel.save();
        console.log(`Usuario Creado`);
        console.log(usuarioSave);


        const respuestaDeUsuarios = await model.find({});
        console.log(`Lectura de Usuarios`);
        console.log(respuestaDeUsuarios);
        

    }catch(error)
    {
        console.log(error);
    }

}




