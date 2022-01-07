const express = require("express");
const app = new express();
const frase = require('./routes/frase.js');
const palabras = require('./routes/palabras.js');
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/api/frase',frase.router);
app.use('/api/palabras',palabras);

app.listen(port,()=>console.log(`App en puerto ${port}`));

