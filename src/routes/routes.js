const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.get('/trabajadores',controller.listarTrabajadores);

router.get('/boletas/:id',controller.listarBoletas);

router.post('/addboleta',controller.addBoleta);

router.post('/addhoras',controller.addHoras);


module.exports = router;