const express = require('express');
const {routerApi} = require('./routes/index')

var app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
routerApi(app)

app.listen(3000, ()=>{
    console.log(`Servidor disponible en el puerto 3000`);
})