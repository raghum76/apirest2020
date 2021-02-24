let mysql=require('../../db/mysql');
let producto=require('../models/producto');
module.exports = {
   create:(req,res)=>{
      console.log(req.body);
      mysql.query('insert into productos SET ?',req.body,(err,rows,fields)=>{
         if(!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   list:(req,res)=>{
      mysql.query('select * from productos',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   find:(req,res)=>{
      mysql.query('select * from productos where id=?',req.parameters.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   }
}
