window.onload = function (e) { // quando carrega a tela

    var btn1 = document.getElementById("btn1"); //peguei o botao da page html

    btn1.onclick = function (e) { // quando clico no botao

        var numeroTexto = document.getElementById("txt1").value;
        var numero = parseInt(numeroTexto); // ele transforma o n° digitado string em n°

        var calculo = raizQuadrada(numero) 

        alert(calculo);

    };

    function raizQuadrada(numero) {

        var raiz = numero * numero;

        return raiz;

    }
}