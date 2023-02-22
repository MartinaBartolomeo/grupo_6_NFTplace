const express = require("express");
const app = express();
const path = require('path');
// Express no sabe interpretar un json por esto agregamos esta linea
app.use(express.json());


// importamos Enrutadores 
const products = require('./router/products.js')
const main = require('./router/main.js')
const user = require('./router/user.js')

// Creo la variable para la ruta a la carpeta
const logMiddleware = require('./middlewares/logMiddleware');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname + '/views'));

// Usamos los enrutadores importados
app.use("/products", products);
app.use('/user',user);
app.use('/',main);

//Usando el middleware
app.use(logMiddleware);

// Usando recursos estaticos
app.use(express.static(__dirname + "./public"));

// Servidor escuchando
app.listen(3040, () =>{
    console.log("servidor corriendo en http://localhost:3040");
});

