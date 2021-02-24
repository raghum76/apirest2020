let mysql=require('../../db/mysql');
let producto=require('../models/producto');
module.exports = {
   create:(req,res)=>{
      console.log(req.body);
      mysql.query('insert into producto SET ?',req.body,(err,rows,fields)=>{
         if(!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   list:(req,res)=>{
      mysql.query('select * from producto',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   find:(req,res)=>{
      mysql.query('select * from producto where id=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   edit:(req,res)=>{
      mysql.query('update producto SET ? where id=?',[req.body, req.params.id],(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   search:(req,res)=>{ //para saber en que ventas se ha vendido el producto
      mysql.query('Select * from venta v inner join detalle_venta d on v.id=d.id_venta inner join producto p on p.id=d.id_producto and d.id_producto=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   }
}
