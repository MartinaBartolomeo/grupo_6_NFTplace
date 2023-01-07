const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("./public"));

app.listen(3040, () =>{
    console.log("servidor corriendo en http://localhost:3040/")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});