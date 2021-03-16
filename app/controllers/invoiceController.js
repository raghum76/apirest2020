let mysql=require('../../db/mysql');
let invoice=require('../models/invoice');
module.exports = {
   create:(req,res)=>{
      //{date, total, amount, products[id_product, quantity, cost]}
      console.log(req.body);
      console.log(req.body.productos);
      console.log(req.body.productos[2].nombre);
      //console.log(JSON.parse(req.body));
      //JSON.parse(req.body.products).forEach(element => {
      res.json({texto:'mensaje'});
      /*mysql.query('insert into order SET ?',req.body,(err,rows,fields)=>{
         if(!err)
            res.json(rows);
         else
            res.json(err);
      })*/
   },
   list:(req,res)=>{
      mysql.query('select * from order',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   find:(req,res)=>{
      mysql.query('select * from order o inner join order_details d on o.id=d.order_id where o.id=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   }
}
