function rutaNoImplementada(_req,res,_next){
    res.render("pages/error");
}

function validarSession(req,res, next){

    if(req.isAuthenticated()){
        next();
    }
    else{
        res.status(200).render("pages/login");
    }
}

module.exports = {rutaNoImplementada, validarSession};