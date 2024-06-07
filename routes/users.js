var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  var nombre= req.query.nombre
  res.send('Hola '+nombre+' como estas');
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  
  var nombre = req.body.nombre;
  var leg = nombre.length;
  

  var vocales = nombre.match(/[aeiou]/gi);
  var consonantes = nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi);

 
  res.send('Hola ' + nombre + ', ¿cómo estás? ' + 'El tamaño de su nombre es ' + leg +
    '. Las vocales en su nombre son: ' + (vocales ? vocales.join(', ') : 'ninguna') +
    '. Las consonantes en su nombre son: ' + (consonantes ? consonantes.join(', ') : 'ninguna'));
});

router.post('/sum', function(req, res, next) {
  console.log(req.body)
  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);
  var result = num1+num2
  res.send('Su respuesta: '+result);
});


module.exports = router;