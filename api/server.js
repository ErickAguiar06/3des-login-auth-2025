require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const loginRoutes = require('./src/routes/login');
const postsRoutes = require('./src/routes/posts');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rotas da API
app.use(loginRoutes);
app.use(postsRoutes);

// Servir arquivos estáticos (opcional)
app.use(express.static(path.join(__dirname, '../front')));

// Rota padrão para login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/login.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});