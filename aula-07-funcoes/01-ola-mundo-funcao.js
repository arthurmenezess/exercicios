window.onload = function (e) { // tem que ser assim

    var btn1 = document.getElementById("btn1"); //peguei o botao da pafe html

    btn1.onclick = function (e) { // ou seja, quando carregar a page, irá atribuir a função mensagem olá mundo ao botão

        var mensagem = "Olá Mundo!";

        exibirMensagem(mensagem);
    }

    function exibirMensagem(mensagem) { // e aqui, quando clicar no botao, sera atribuido a funcao mensagem ola mundo

        alert(mensagem);

    }
}