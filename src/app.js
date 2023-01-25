const express = require("express");
const app = express();
const path = require('path');

// importamos Enrutadores 
const products = require('./routes/products.js');
const main = require('./routes/main.js');
const user = require('./routes/user.js');

app.set('view engine', 'ejs');

// Usamos los enrutadores importados
app.use('/index', products);
app.use('/index', main);
app.use('/user', user);

// Usando recursos estaticos
app.use(express.static("./public"));

// Servidor escuchando
app.listen(3040, () =>{
    console.log("servidor corriendo en http://localhost:3040/");
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

