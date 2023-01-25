// Creamos el objeto literal con los metodos a exportar
const productsController = {
    //Manejo del pedido get con ruta /productos/compra
    compra: (req, res) => {
        res.send('Compra exitosa');
    }, 
    venta: (req, res) => {
        res.send('Venta exitosa');
    }, 

    // Procesa el pedido get con ruta /productos/numeroProducto
    // Ruta parametrizada
    detalle: (req, res) => {
        // en req.params tenemos el parametro que definimos en el enrutador
        let productoID = req.params.num;
        res.send('Detalle de producto ' + productoId);
    }
}

// Exportamos el objeto literal con los distintos metodos
module.exports = productsController;