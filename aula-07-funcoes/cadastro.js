window.onload = function (e) { // tem que ser assim

    var btnCadastrar = document.getElementById("btnCadastrar");
    var txtNome = document.getElementById("txtNome");
    var txtSobrenome = document.getElementById("txtSobrenome");
    var txtCpf = document.getElementById("txtCpf");
    var txtTelefone = document.getElementById("txtTelefone");
    var slcGenero = document.getElementById("slcGenero");
    var txtEmail = document.getElementById("txtEmail");
    var txtSenha = document.getElementById("txtSenha");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;
        var sobrenome = txtSobrenome.value;
        var cpf = txtCpf.value;
        var telefone = txtTelefone.value;
        var genero = slcGenero.value;
        var email = txtEmail.value;
        var senha = txtSenha.value;

        if (nome == "") {
            exibirMensagemErro("Informe o nome.");
        }
        else if (sobrenome == "") {
            exibirMensagemErro("Informe o sobrenome.");
        }
        else if (cpf == "") {
            exibirMensagemErro("Informe o CPF.");
        }
        else if (telefone == "") {
            exibirMensagemErro("Informe o telefone.");
        }
        else if (email == "") {
            exibirMensagemErro("Informe o e-mail.");
        }
        else if (senha == "") {
            exibirMensagemErro("Informe sua senha.");
        }
        else {
            cadastrar(nome, sobrenome, cpf, telefone, email, genero, senha);
        }

    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";
        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }

    function cadastrar(nome, sobrenome, cpf, telefone, email, genero, senha) {

        alert("O cadastro foi realizado com sucesso para o usuário " + email);
    }
}