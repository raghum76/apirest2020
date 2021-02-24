//var ventaController=require('../controllers/ventaController');
var router = require('express').Router()
router.get('/search', function(req, res) {
//  ventaController.search(req,res);
})
router.get('/', function(req, res) {
  
//  ventaController.list(req,res);
})
router.get('/:id', function(req, res) {
  
//  ventaController.find(req,res);
})
router.post('/', function(req, res) {
  
//  ventaController.create(req,res);
})
//url:puerto/api/clientes
module.exports = router


