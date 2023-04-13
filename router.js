const express = require('express');
const router = express.Router(); 

let clientes = ["Rodrigo","Jorge","Luis","Sabrina","María","Romina","Andres","Cesar"];
let productos = ["Cuaderno","Tasa","Computadora","PS4","Celular","Cama","Teclado","Mochila"];


router.get('/', (req, res)=>{
      res.render('main');  
})

router.get('/clientes', (req, res)=>{
      res.render('clientes', {cli: clientes});  
})

router.get('/productos', (req, res)=>{
      res.render('productos', {pro: productos});  
})

module.exports = router;