function salvaDados(){
   const cadForm = document.getElementById('cadastrar');

//Esperar o usuário clicar no botão confirmar do formulário
cadForm.addEventListener("submit", (e) => {

    //Não recarregar a página
    e.preventDefault();

    //Receber dados do formulário
    let nome = document
        .getElementById('nome')
        .value;
    let marca = document
        .getElementById('marca')
        .value;
    let modelo = document
        .getElementById('modelo')
        .value;
    let cor = document
        .getElementById('cor')
        .value;
    let quantidade = document
        .getElementById('number')
        .value;
    let codigo = document
        .getElementById('codigo')
        .value;

    //validações
    if (nome === "") {
        alert("Preencha este campo com o nome da sua empresa");
        return;
    }

    if (marca === "") {
        alert("Preencha este campo com a marca de sua empresa");
        return;
    }

    if (modelo === "") {
        alert("Preencha este campo com o modelo de sua empresa");
        return;
    }

    if (cor === "") {
        alert("Preencha este campo com o endereço de sua empresa");
        return;
    }

    if (quantidade === "") {
        alert("Preencha este campo com o número de telefone de sua empresa");
        return;
    }

    if (codigo === "") {
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
        nome,
        marca,
        modelo,
        cor,
        quantidade,
        codigo
    });

    //salva no localstorage
    localStorage.setItem("dados", JSON.stringify(dados));

    alert("Cadastro Criado com sucesso");

}); 
}
function verificarCadastro() {
    salvaDados();
    let nome = document.getElementById("nome").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;
    let quantidade = document.getElementById("quantidade").value;
    let codigo = document.getElementById("codigo").value;

    // Recupera os dados do localStorage
    let dadosArmazenados = localStorage.getItem("dados");

    // Verifica se existem dados armazenados
    if (dadosArmazenados) {
      // Converte os dados para objeto
      let dados = JSON.parse(dadosArmazenados);

      // Percorre os dados armazenados para encontrar uma correspondência
      let encontrou = false;
      for (let i = 0; i < dados.length; i++) {
        let cadastro = dados[i];
        if (
          cadastro.nome === nome &&
          cadastro.marca === marca &&
          cadastro.modelor === modelo &&
          cadastro.cor === cor&&
          cadastro.quantidade === quantidade&&
          cadastro. codigo ===  codigo

        ) {
          encontrou = i;
          break;
        }
      }

      // Verifica se encontrou correspondência
      if (encontrou !== -1) {
        alert("Cadastro existente!")
        window.location.href = "consultar.html"
      } else {
        alert("O cadastro inexistente.");
      }
    } else {
      alert("Não há dados armazenados.");
    }
  }
function excluir(){

  verificarCadastro();

  if (encontrou !== -1) {
    // Recupera os dados do localStorage
    let dadosArmazenados = localStorage.getItem("dados");

    // Converte os dados para objeto
    let dados = JSON.parse(dadosArmazenados);

    // Remove o objeto do array
    dados.splice(encontrou, 1);

    // Atualiza os dados no localStorage
    localStorage.setItem("dados", JSON.stringify(dados));

    alert("Objeto removido com sucesso.");
  }
}
