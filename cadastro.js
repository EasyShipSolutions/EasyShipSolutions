// Função para cadastrar um usuário
function cadastrarUsuario() {

    var nome = document.getElementById("user-cadastro").value;
    var email = document.getElementById("email_cadastro").value;
    var senha = document.getElementById("senha_cadastro").value;


    var novoUsuario = { nome: nome, email: email, senha: senha };


    var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || []; // Obtém a lista de usuários cadastrados do localStorage ou cria uma nova lista vazia

    // Verifica se o usuário já existe na lista de usuários cadastrados
    var usuarioExistente = usuariosCadastrados.find(function (usuario) {
        return usuario.email === email;
    });

    if (usuarioExistente) {

        alert("Email já cadastrado. Por favor, faça login.");
    } else {

        usuariosCadastrados.push(novoUsuario);

        // Salva a lista atualizada de usuários cadastrados no localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));


        alert("Cadastro realizado com sucesso. Faça login para continuar.");
        document.getElementById("cadastro").reset();
        window.location.href = "login.html";
    }

    // Retorna false para evitar o envio do formulário
    return false;
}
function fazerLogin() {
    // Obtém os valores dos campos de input do formulário de login
    var email = document.getElementById("email_login").value;
    var senha = document.getElementById("senha_login").value;

    // Obtém a lista de usuários cadastrados do localStorage ou cria uma nova lista vazia
    var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o usuário existe e se a senha está correta
    var usuarioExistente = usuariosCadastrados.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioExistente) {
        // Se o usuário existe e a senha está correta, exibe um alerta de login bem-sucedido
        alert("Login bem-sucedido! Bem-vindo, " + usuarioExistente.nome + "!");

        // Reseta o formulário de login
        document.getElementById("login").reset();

        // Redireciona o usuário para a página inicial
        window.location.href = "tela-inicial.html";
    } else {
        // Se o usuário não existe ou a senha está incorreta, exibe um alerta de erro
        alert("Email ou senha incorretos. Por favor, tente novamente.");
    }

    // Retorna false para evitar o envio do formulário
    return false;
}

// Função de Redefinir Senha

function redefinirSenha() {

    let novaSenha1 = document.getElementById("senha_login").value;
    let novaSenha2 = document.getElementById("senha_login").value;

    var usuarioExistente = usuariosCadastrados.find(function (usuario) {
        return usuario.senha === novaSenha1 && usuario.senha === novaSenha2;

    });
}
// Função para redefinir senha
function redefinirSenha() {
    // Obtém o email e a nova senha digitados pelo usuário
    var email = document.getElementById("email_redefinicao").value;
    var novaSenha1 = document.getElementById("senha_login").value;
    var novaSenha2 = document.getElementById("senha_login").value;

    // Obtém a lista de usuários cadastrados do localStorage
    var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Encontra o usuário na lista de usuários cadastrados com base no email
    var usuarioExistente = usuariosCadastrados.find(function (usuario) {
        return usuario.email === email;
    });
    if (novaSenha1 === novaSenha2) {

        if (usuarioExistente) {
            // Atualiza a senha do usuário com a nova senha digitada
            usuarioExistente.senha = novaSenha1;

            // Salva a lista atualizada de usuários cadastrados no localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

            // Exibe uma mensagem informando que a nova senha foi atualizada
            alert("Sua senha foi redefinida com sucesso.");

            // Redireciona o usuário para a página de login
            window.location.href = "login.html";
        } else {
            // Se o usuário não existir na lista, exibe um 
            alert("Email não cadastrado. Por favor, verifique o email digitado.");
        }
        return false;
    }
}