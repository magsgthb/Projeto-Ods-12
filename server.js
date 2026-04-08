const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const produtosRoutes = require('./rotas/produtos');
app.use('/produtos', produtosRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobre.html');
});

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/public/cadastro.html');
});

app.get('/produtos-page', (req, res) => {
  res.sendFile(__dirname + '/public/produtos.html');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});