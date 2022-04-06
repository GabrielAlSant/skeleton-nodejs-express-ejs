var express = require('express');
var router = express.Router();
const Autor = require("../models/autor")
const Livro = require("../models/livro")

/* GET home page. */
router.get("/", async function(req, res , next){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post("/inserir", async function(req, res , next){
  
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put("/atualizar", async function(req, res , next){
 
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
  
});

router.delete("/deletar", async function(req, res , next){
  const autores = await Autor.deletar(req.body);
  res.json(autores.rows);
});

router.get("/livro", async function(req, res , next){
  const autores = await Livro.selecionarlivro();
  res.json(autores.rows);
});

router.post("/inserirlivro", async function(req, res , next){
  
  const autores = await Livro.inserirlivro(req.body);
  res.json(autores.rows);
});

router.put("/atualizarlivro", async function(req, res , next){
 
  const autores = await Livro.atualizarlivro(req.body);
  res.json(autores.rows);
  
});

router.delete("/deletarlivro", async function(req, res , next){
  const autores = await Livro.deletarlivro(req.body);
  res.json(autores.rows);
});

router.post("/autor", async function(req, res , next){
  
  const autores = await Livro.autor(req.body);
  res.json(autores.rows);
});

module.exports = router;
