const socket = io();
let mensajes =[];
socket.on("mi mensaje", data =>{
     alert(data);
     socket.emit("notificacion", "Mensaje recibido exitosamente");
    
});
socket.on("mensajes",data=>{
     console.log(data);
});
