function rutaNoImplementada(req,res,_next){
    res.json({error:-2, descripción:`ruta método ${ req.method} no implementada`});
}

function validarSession(req,res, next){
    let nombre;
    console.log(req.session.usuario)
    if(req.session.usuario){
        nombre= req.session.usuario.nombre;
        if(nombre){
            next();
        }
        else{
            res.redirect("login");
        }
    }
    else{
        res.redirect("login");
    }
}

module.exports = {rutaNoImplementada, validarSession};