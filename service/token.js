const jwt = require('jsonwebtoken')


function createToken(usuario) {// de parametro deber ir un objeto user

    let token = jwt.sign({
        usuario
    },process.env.SEMILLA,{expiresIn: process.env.CADUCIDAD_TOKEN});
    
    return token
}

function decodeToken(token) {
    const decode = new Promise((resolve, reject) => {
        try {

            const payload = jwt.decode(token, SECRET_TOKEN)

            if (payload.exp < moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }

            resolve(payload.sub)


        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }

    })

    return decode

}
module.exports = {
    createToken,
    decodeToken
}
