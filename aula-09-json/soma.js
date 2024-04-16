window.onload = function (e) {

    var btn1 = document.getElementById("btn1");
    var nmr1 = document.getElementById("nmr1");
    var nmr2 = document.getElementById("nmr2");

    btn1.onclick = function (e) {

        var valor1 = nmr1.value;
        var valor2 = nmr2.value;
        var soma = valor1 + valor2;

        resultadoDaSoma(soma);

    }

    function resultadoDaSoma(valor1 , valor2) {
        var data = "";
         
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;
                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44330/api/aula8/somar?valor1=" + valor1 + "&valor2=" + valor2);
        xhr.send();
    }
}