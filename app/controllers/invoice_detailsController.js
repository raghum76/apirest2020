let mysql=require('../../db/mysql');
let invoice_details=require('../models/invoice_details');
module.exports = {
   create:(req,res)=>{
      console.log(req.body);
      mysql.query('insert into invoice_details SET ?',req.body,(err,rows,fields)=>{
         if(!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   list:(req,res)=>{
      mysql.query('select * from invoice_details',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   find:(req,res)=>{
      mysql.query('select * from invoice_details where order_id=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   edit:(req,res)=>{
      mysql.query('update invoice SET ? where id=?',[req.body, req.params.id],(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   search:(req,res)=>{ //para saber en que ventas se ha vendido el producto
      mysql.query('Select * from order v inner join order_detail d on v.id=d.id_venta inner join product p on p.id=d.id_product and d.id_product=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   }
}
