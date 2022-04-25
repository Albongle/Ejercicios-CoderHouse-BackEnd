require("dotenv").config();
async function getManagerProductos(){
    const modulo = await import(`./producto/productosDAO${process.env.OPCION}.js`);
    return modulo;
}
async function getManagerCarrito(){
    const modulo = await import(`./carrito/carritoDAO${process.env.OPCION}.js`);
    return modulo;
}



module.exports = {getManagerCarrito,getManagerProductos};