
//alert("Bienbenido a calculadora **Eliom** ");

function fBtn() { 
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resu = num1 + num2
    document.getElementById("resultado").value = resu;
}

let enviar = document.getElementById("boton");
enviar.addEventListener("click", fBtn);

