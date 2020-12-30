var clienteController=require('../controllers/clienteController');
var router = require('express').Router()
router.get('/search', function(req, res) {
  res.json({ message: 'Vas a buscar un cliente'})
})
router.get('/', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  clienteController.list(req,res);
})
router.get('/:id', function(req, res) {
  res.json({ message: 'Vas a obtener la clientes con id ' + req.params.id })
})
router.post('/', function(req, res) {
  //res.json({ message: 'Vas a añadir un cliente' })
  clienteController.create(req,res);
})
router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el cliente con id ' + req.params.id })
})
router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el cliente con id ' + req.params.id})
})
//url:puerto/api/clientes
module.exports = router