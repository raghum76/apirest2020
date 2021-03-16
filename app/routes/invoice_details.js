var invoice_detailsController=require('../controllers/invoice_detailsController');
var router = require('express').Router()
router.get('/search/:id', function(req, res) {
  //res.json({ message: 'Vas a buscar un producto'})
  invoice_detailsController.search(req,res);
})
router.get('/', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  invoice_detailsController.list(req,res);
})
router.get('/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener la clientes con id ' + req.params.id })
  invoice_detailsController.find(req,res);
})
router.post('/', function(req, res) {
  //res.json({ message: 'Vas a añadir un cliente' })
  invoice_detailsController.create(req,res);
})
router.put('/:id', function(req, res) {
  //res.json({ message: 'Vas a actualizar el cliente con id ' + req.params.id })
  invoice_detailsController.edit(req,res);
})
//url:puerto/api/clientes
module.exports = router


