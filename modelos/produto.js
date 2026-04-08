const db = require('../config/db');

const Produto = {

  getAll: (callback) => {
    db.query('SELECT * FROM produtos', callback);
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO produtos 
      (nome, valor, descricao, fornecedor, email, telefone)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
      data.nome,
      data.valor,
      data.descricao,
      data.fornecedor,
      data.email,
      data.telefone
    ], callback);
  },

  update: (id, data, callback) => {
    const sql = `
      UPDATE produtos SET
        nome = ?,
        valor = ?,
        descricao = ?,
        fornecedor = ?,
        email = ?,
        telefone = ?
      WHERE id = ?
    `;
    db.query(sql, [
      data.nome,
      data.valor,
      data.descricao,
      data.fornecedor,
      data.email,
      data.telefone,
      id
    ], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM produtos WHERE id = ?', [id], callback);
  }

};

module.exports = Produto;