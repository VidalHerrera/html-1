function sumar(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;

    if(n1 == ''){
        n1 = 0;
    }
    if(n2 == ''){
        n1 = 0;
    }

    var sumatoria = parseInt(n1) + parseInt(n2);

    document.getElementById("resultado").value = sumatoria;

}