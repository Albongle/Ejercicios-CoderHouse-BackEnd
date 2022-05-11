import { postDatosFetch} from "./fetch.js";

const btnLogin = document.querySelector("#btn-login");


btnLogin.addEventListener("click",async ()=>{

    const usuario = {usuario:document.querySelector("#txt-usuario").value};
    await postDatosFetch("http://localhost:3000/login",usuario);
    document.location="http://localhost:3000/";

});