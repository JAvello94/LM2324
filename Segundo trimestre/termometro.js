function  conversion (tipo) {
    let valor = document.getElementById('grados').value;


    if (tipo == "farenheit"){

        resultado = (valor * 9/5) +32;
        document.getElementById("resultado").innerHTML = resultado + "ºF";

    }

    else {
        resultado = (valor -32) * 5/9;
        document.getElementById("resultado").innerHTML = resultado + "ºC"
    }

    
}