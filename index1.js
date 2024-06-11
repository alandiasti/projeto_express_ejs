const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.json({mensagem: "Alo mundo"});
    res.end(0);
})
app.listen(port, ()=> {
    console.log(`Servidor execultando na porta ${port}`);
})