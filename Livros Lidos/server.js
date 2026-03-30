const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Permite que o Node sirva seus arquivos HTML/CSS/JS estáticos
app.use(express.static('.'));

// Rota que o seu JavaScript (fetch) vai chamar
app.get('/api/biblioteca', (req, res) => {
    // Lendo o arquivo JSON do disco
    fs.readFile('biblioteca.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Erro ao ler o arquivo");
        }
        // Envia os dados como JSON para o navegador
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});