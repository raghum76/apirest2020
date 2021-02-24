var router = require('express').Router()
 
var clientes = require('./clientes')
router.use('/clientes', clientes)
var clientes = require('./ventas')
router.use('/ventas', ventas)
var clientes = require('./productos')
router.use('/productos', productos)
 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})
//localhost:1339/api
module.exports = router