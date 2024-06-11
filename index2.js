const express = require('express');
const app = express();
const port = 3000;

let tarefa = [ {tarefa: "compilar"}, {tarefa: "testar"}];
app.get ( [ '/', '/tarefa' ], (req, res) => {
    let conteudo = "<html><body><ul>";
    for (let t of tarefa)
        conteudo += `<li>${t.tarefa}</li>`;
    conteudo += "<html><body><ul>";
    res.status(200)
    .contentType('text/html')
    .send(conteudo);

})
app.listen(3000);