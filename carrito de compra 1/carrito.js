let gastado = 0;

let btn1 = document.getElementById("laptop-1");
btn1.addEventListener("click", x1);

function x1(){ 
    let precio1 = document.getElementById("precio-1").innerText;
    gastado = parseFloat(precio1) + gastado
    document.getElementById("gastado").innerText = gastado;

}


let btn2 = document.getElementById("laptop-2");
btn2.addEventListener("click", x2);

function x2(){ 
    let precio2 = document.getElementById("precio-2").innerText;
    gastado = parseFloat(precio2) + gastado
    document.getElementById("gastado").innerText = gastado;

}

let btn3 = document.getElementById("laptop-3");
btn3.addEventListener("click", x3);

function x3(){ 
    let precio3 = document.getElementById("precio-3").innerText;
    gastado = parseFloat(precio3) + gastado
    document.getElementById("gastado").innerText = gastado;

}

let btn4 = document.getElementById("laptop-4");
btn4.addEventListener("click", x4);

function x4(){ 
    let precio4 = document.getElementById("precio-4").innerText;
    gastado = parseFloat(precio4) + gastado
    document.getElementById("gastado").innerText = gastado;

}