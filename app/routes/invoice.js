var invoiceController=require('../controllers/invoiceController');
var router = require('express').Router()
router.get('/', function(req, res) {
  
    invoiceController.list(req,res);
})
router.get('/:id', function(req, res) {
  
    invoiceController.find(req,res);
})
router.post('/', function(req, res) {
  
    invoiceController.create(req,res);
})
//url:puerto/api/clientes
module.exports = router


