//funciones

function fEnviar(){
    let textArea = document.getElementById("text-area").value;
    document.getElementById("poema").innerText = textArea;
}

//eventos
let enviar = document.getElementById("enviar");
enviar.addEventListener("click", fEnviar)





