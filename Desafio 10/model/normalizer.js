const { normalize, schema } = require("normalizr");
const mensajesANormalizar = {id:1,mensajes:[]};
const mensaje = new schema.Entity("mensaje");
const autor = new schema.Entity("autor",{mensaje:[mensaje]});
const chat = new schema.Entity("mensajes", {mensajes:[mensaje], autor:[autor]});

function normalizarMensaje(value){
    mensajesANormalizar.mensajes.push(value);
    return normalize(mensajesANormalizar, chat);
}
module.exports = normalizarMensaje;