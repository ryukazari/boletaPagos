const mysqlConnection = require('../db_connection.js');


function listarTrabajadores(req,res){
    mysqlConnection.query('SELECT * FROM trabajador',function(err, rows, fields){
        if(!err){
            return res.json(rows);
        }else{
            console.log(err);
        }
    })
}

function listarBoletas(req,res){
    let {id} = req.params;
    mysqlConnection.query(`SELECT t.nombre, h.horas, t.sueldo
    FROM horastrabajo as h INNER JOIN trabajador as t ON h.idtrabajador = t.id
    where t.id =  ?`,[id], function(err,rows,fields){
        if(!err){
            return res.json(rows);
        }else{
            console.log(err);
        }
    })
}


function addBoleta(req,res){
    const {id,monto,idtrabajador}=req.body;
    const query=`
        CALL addBoleta(?,?,?);
    `;
    mysqlConnection.query(query,[id,monto,idtrabajador],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Anotadazo'})
        }else{
            console.log(err);
        }
    })
}

function addHoras(req,res){
    const {id,horas,fecha,idtrabajador}=req.body;
    const query=`
        CALL addHoras(?,?,?,?);
    `;
    mysqlConnection.query(query,[id,horas,fecha,idtrabajador],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Anotadazo'})
        }else{
            console.log(err);
        }
    })
}


module.exports = {
    listarTrabajadores:listarTrabajadores,
    listarBoletas:listarBoletas,
    addBoleta:addBoleta,
    addHoras:addHoras
};