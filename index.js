const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const __path = process.cwd();
const PORT = process.env.PORT || 7000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__path, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__path, '/public/index.html'));
});

app.get('/tde', (req, res) => {
    res.sendFile(path.join(__path, '/public/tde.html'));
});

app.get('/macro', (req, res) => {
    res.sendFile(path.join(__path, '/public/macro.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
