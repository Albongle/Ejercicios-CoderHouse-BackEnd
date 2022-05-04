const socket = io(); // con el io cierro la conexion entre el servidor y el cliente
const message = document.querySelector("#message");
const user = document.querySelector("#user");
const actions = document.querySelector("#websocket-actions");
const send = document.querySelector("#sendMessage");
const messages = document.querySelector("#websocket-messages");
const btnCierra = document.querySelector("#btn-cierra-dialogo-chat");
const btnAbre = document.querySelector("#btn-open-chat");
const dialogoChat = document.querySelector("#dialogo-chat");
const mensaje = new normalizr.schema.Entity("mensaje");
const autor = new normalizr.schema.Entity("autor",{mensaje:[mensaje]});
const chat = new normalizr.schema.Entity("mensajes", {mensajes:[mensaje], autor:[autor]});
const compresion = document.querySelector("#websocket-compresion");
let idMensaje=0;

message.addEventListener("keyup", (event) => {
  const exp = new RegExp("[a-zA-Z]+[0-9]?");
  if (!exp.test(user.value)) {

    alert("Debe ingresar un usuario o nombre valido");
    message.value = "";
    user.value = "";
    user.focus();
  }else if((message.value != "")){
    eventTiping("tiping");
  }else{
    eventTiping("notiping");
  }
});


send.addEventListener("click",()=>{

  const exp = new RegExp("^ *$");
  if(message.value.length>0 && !exp.test(message.value)){
    eventNewMessage();
  }

  
});

user.addEventListener("change",()=>{
  const exp = new RegExp("[a-zA-Z]+[0-9]?");
  if (exp.test(user.value)) {
    message.removeAttribute("disabled");
    send.removeAttribute("disabled");
  }else{
    message.setAttribute("disabled",true);
    send.setAttribute("disabled",true);
    alert("Debe ingresar un usuario o nombre valido");
  }
    
});

btnAbre.addEventListener("click",()=>{
  dialogoChat.setAttribute("open","true");
 
});


btnCierra.addEventListener("click",()=>{
  dialogoChat.removeAttribute("open");
});



socket.on("chat:tiping", (data) => {
  if(data.status === "tiping"){
    actions.innerHTML=`<p>${data.user} esta escribiendo un mensaje</p>`;
  }else{
    actions.innerHTML="";
  }
});


socket.on("new:message",(data)=>{
  let comprimido = JSON.stringify(data).length;
  const datosDesnormalizados = normalizr.denormalize(data.result, chat, data.entities);
  let descomprimido = JSON.stringify(datosDesnormalizados).length;
  messages.innerHTML="";
  compresion.innerHTML =`Compresion ${((comprimido/descomprimido)*100).toFixed(2)}%`;
  datosDesnormalizados.mensajes.forEach(elemento => {
    if(socket.id === elemento.autor.id){
      messages.innerHTML+=`<p class="messages-me"><span>${elemento.autor.user}:</span> ${elemento.mensaje}</p>`
    }else{
      messages.innerHTML+=`<p class="messages-other"><span>${elemento.autor.user}:</span> ${elemento.mensaje}</p>`
    }
  });

  

});

const eventTiping = (status)=>{

  socket.emit("chat:tiping", { user: user.value, idSocket: socket.id,status:status });

}
const eventNewMessage = ()=>{
  idMensaje++;
  const objeto = {
    id:idMensaje,
    autor:{
      id:socket.id,
      user:user.value,
    },
    mensaje:message.value
  };
  socket.emit("new:message", objeto);
  message.value="";
  eventTiping("notiping");
}
