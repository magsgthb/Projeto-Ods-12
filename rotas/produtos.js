const express = require('express');
const router = express.Router();
const Produto = require('../modelos/produto');

// LISTAR
router.get('/', (req, res) => {
  Produto.getAll((err, results) => {
    if (err) return res.json(err);
    res.json(results);
  });
});

// CRIAR
router.post('/', (req, res) => {
  Produto.create(req.body, (err) => {
    if (err) return res.json(err);
    res.json({ message: 'Produto cadastrado!' });
  });
});

// ATUALIZAR
router.put('/:id', (req, res) => {
  Produto.update(req.params.id, req.body, (err) => {
    if (err) return res.json(err);
    res.json({ message: 'Produto atualizado!' });
  });
});

// DELETAR
router.delete('/:id', (req, res) => {
  Produto.delete(req.params.id, (err) => {
    if (err) return res.json(err);
    res.json({ message: 'Produto deletado!' });
  });
});

module.exports = router;