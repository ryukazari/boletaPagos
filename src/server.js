const express = require('express');
const app= express();;
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app 
Settings - Configuraciones
    inicializar variablepara el puerto
    proces.env.port => puerto recibido
 */
app.set('port', process.env.PORT || 3000)


app.use(express.json());

//Routes - rutas
app.use(require('./routes/routes.js'));
//app.use(require('./routes'));

app.listen(app.get('port'), function () {
    console.log('servidor en el puerto ',app.get('port'))
});

