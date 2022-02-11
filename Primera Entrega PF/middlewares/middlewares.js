const checkAccesAdmin = (req, res, next) => {
    if (req.body.type!= undefined && req.body.type === "Admin") {
        next();
    }else{
      res.json({error:"Ustede no es admin"});
    }
  }

  module.exports = {checkAccesAdmin};