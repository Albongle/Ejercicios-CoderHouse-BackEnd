let calcular = require("./modules/operacion.js");

async function operaciones () 
{  

    try{
        
        let resultadoSuma = await calcular.operacion(10,5,"suma");
        let resultadoResta = await calcular.operacion(10,5,"resta");
        console.log(`El resultado de la operacion suma es ${resultadoSuma}, el de la resta es ${resultadoResta}`);
        let resultadoMultiplicacion = await calcular.operacion(10,5,"multiplicacion"); // pueba de excepcion;
    }
    catch(error){
        console.error(error.message);
    }
    

}
operaciones();