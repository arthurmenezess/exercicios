window.onload = function (e) { // tem que ser assim

    var btnRecuperarSenha = document.getElementById("btnRecuperarSenha");
    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    btnRecuperarSenha.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Informe o e-mail.");
        }
        else {
            recuperarSenha(email);
        }
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";
        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    };

    function recuperarSenha(email) {
        alert("Um e-mail com as instruções para recuperar a senha foi enviado para " + email + ".");
    }
};