// definir variables

let contador = 0;
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");

// definir funciones

// suma
function fSumar(){ 
    contador = contador + 1
    document.getElementById("puntaje").innerText = contador;
}

// resta
function fRestar(){ 
    contador = contador - 1
    document.getElementById("puntaje").innerText = contador;
}

// definir eventos

// evento suma
sumar.addEventListener("click", fSumar);

// evento resta
restar.addEventListener("click", fRestar);


alert("Bienbenido Clicker");

