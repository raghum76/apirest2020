var productoController=require('../controllers/productoController');
var router = require('express').Router()
router.get('/search/:id', function(req, res) {
  //res.json({ message: 'Vas a buscar un producto'})
  productoController.search(req,res);
})
router.get('/', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  productoController.list(req,res);
})
router.get('/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener la clientes con id ' + req.params.id })
  productoController.find(req,res);
})
router.post('/', function(req, res) {
  //res.json({ message: 'Vas a añadir un cliente' })
  productoController.create(req,res);
})
router.put('/:id', function(req, res) {
  //res.json({ message: 'Vas a actualizar el cliente con id ' + req.params.id })
  productoController.edit(req,res);
})
//url:puerto/api/clientes
module.exports = router


