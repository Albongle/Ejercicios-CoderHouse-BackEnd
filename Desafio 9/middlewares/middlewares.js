const rutaNoImplementada =(req,res,next)=>{
    res.json({error:-2, descripción:`ruta método ${ req.method} no implementada`});

}
module.exports = {rutaNoImplementada};