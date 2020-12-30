
var express = require('express') //llamamos a Express
var app = express()       
var cors=require('cors');
var bodyParser = require('body-parser')        
 
var port = process.env.PORT || 1339 // establecemos nuestro puerto
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            
 
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes')
app.use('/api', router)
//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)


/*var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 1339  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!  HTML' })   
});

app.post('/',(req,res)=>{
      res.json({mensaje:' Metodo Posts'});
})
   
app.delete('/',(req,res)=>{
      res.json({mensaje:' Metodo Delete'});
})

//recursos
app.get('/clientes',(req,res)=>{
      res.json({mensaje:' listado de clientes'});
})

app.post('/clientes',(req,res)=>{
    //debo recuperar informacion
    res.json({mensaje:' post clientes'});
})

app.get('/facturas',(req,res)=>{
    res.json({mensaje:'accesando a recurso facturas el get es traerte todas'})
})

app.put('/',(req,res)=>{
    //acciones de modificacion
    res.json({mensaje:'Modificacion'});
})

 
app.listen(port,()=>console.log ('Escuchando en puerto ' + port));
*/