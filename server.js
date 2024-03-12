const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    fetch('https://filipporzucek.github.io/FirstProtfolioProject/data.json')
        .then(response => response.json())
        .then(data => {
            res.send(JSON.stringify(data));
        })
        .catch(error => {
            res.status(500).send('Internal Server Error');
        });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});