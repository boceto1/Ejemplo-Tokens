require('./config')

const express = require('express');
const bodyParser = require('body-parser')
const {createToken} = require('./service/token')
const {verificaToken} = require('./autenticacion')

const app = express();

//Para formato aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//Para formato application/json
app.use(bodyParser.json())


app.get('/',verificaToken, function (req, res) {
  res.json({
      ok:true,
      message:'Hello World!'
  });
});


app.post('/crearToken',function(req,res){

    let usuario = {
      id:'1234',
      nombre:'Jean Karlo',
      email: 'jkobando@espe.edu.ec'
    }

    let token = createToken(usuario)

    res.json({
      ok:true,
      token
    })

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});