let db=require('../../db/db');
let cliente=require('../models/cliente');
module.exports = {
    create:(req,res)=>{
       console.log(req.body);
       res.json({mensaje:'Se agrego un cliente'});
       db.agregarCliente(new cliente('a','r'));
    },
    list:(req,res)=>{
       res.json(db.listarClientes());
    }
}
