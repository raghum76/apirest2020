var router = require('express').Router()
 
//var ventas = require('./ventas')
//router.use('/ventas', ventas)
var productos = require('./productos')
router.use('/productos', productos)
 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})
//localhost:1339/api
module.exports = router