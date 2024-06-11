/// usando o ejs///
const express = require('express');
const app = express()
app.set('view engine', 'ejs');
//app.set('views', './views');

app.get('/exemplo', (req, res) => {
    const dados = [{nome: "Alan", idade:29},
        {nome: "Dayana", idade:25}];
    res.render('exemplo', {pessoas: dados}); 
});
app.listen(3000);