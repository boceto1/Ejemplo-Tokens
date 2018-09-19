const jwt = require('jsonwebtoken')

/**
 * Este es un Middleware que valida que el token sea válido
 */

let verificaToken = (req,res,next) =>{

    // req.get () devuleve HEADERS
    let token = req.get('Authorization');

    jwt.verify(token,process.env.SEMILLA, (err,decoded)=>{

        if(err){
            return res.status(401).json({
                ok:false,
                err
            })
        }

        //Para despues manejar un usuario ya validado
        req.usuario = decoded.usuario;
        next();

    });
 }


 module.exports = {
     verificaToken
 }