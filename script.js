const cadForm = document.getElementById('cadastrar');

//Esperar o usuário clicar no botão confirmar do formulário
cadForm.addEventListener("submit", (e) => {

    //Não recarregar a página
    e.preventDefault();

    //Receber dados do formulário
    var nomeFantasia = document
        .getElementById('nome')
        .value;
    var marca = document
        .getElementById('brand')
        .value;
    var cnpj = document
        .getElementById('cnpj')
        .value;
    var endereco = document
        .getElementById('addres')
        .value;
    var numeroTelefone = document
        .getElementById('number')
        .value;
    var vendedor = document
        .getElementById('seller')
        .value;

    //validações
    if (nomeFantasia === "") {
        alert("Preencha este campo com o nome fantasia de sua empresa");
        return;
    }

    if (marca === "") {
        alert("Preencha este campo com a marca de sua empresa");
        return;
    }

    if (cnpj === "") {
        alert("Preencha este campo com o cnpj de sua empresa");
        return;
    }

    if (endereco === "") {
        alert("Preencha este campo com o endereço de sua empresa");
        return;
    }

    if (numeroTelefone === "") {
        alert("Preencha este campo com o número de telefone de sua empresa");
        return;
    }

    if (vendedor === "") {
        alert("Preencha este campo com o nome do vendedor de sua empresa");
        return;
    }

    //Criando o array de objetos
    let dados = new Array();

    //verifica se a  let dados já existe no localstorage
    if (localStorage.hasOwnProperty("dados")) {

        // Recuperar os valores da propriedade dados do localstorage Convertendo a
        // string  para objeto
        dados = JSON.parse(localStorage.getItem("dados"));
    }

    //adiciona um novo objeto ao array
    dados.push({
        nomeFantasia,
        marca,
        cnpj,
        endereco,
        numeroTelefone,
        vendedor
    });

    //salva no localstorage
    localStorage.setItem("dados", JSON.stringify(dados));

    alert("Cadastro Criado com sucesso");

});
