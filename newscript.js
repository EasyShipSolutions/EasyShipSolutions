$(".menu > ul > li").click(function(e){ //Seleciona os itens do menu que estão no primeiro nivel de hierarquia

    //remove a classe active do item ao ser clicado
    $(this).siblings().removeClass("active");

    //adiciona ou remove a classe active do item ao ser clicado
    $(this).toggleClass("active");

    //exibi ou oculta o submenu
    $(this).find("ul").slideToggle();

    //fecha o submenu dos itens
    $(this).siblings().find("ul").slideUp();

    //remove a classe active dos itens do submenu
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function(){

    //adiciona ou remove a classe active da barra lateral
    $(".sidebar").toggleClass("active");
    
});

function verificarCadastro() {

    var marca = document.getElementById("marca").value;
    var telefone = document.getElementById("telefone").value;
    var vendedor = document.getElementById("vendedor").value;
    var cnpj = document.getElementById("cnpj").value;


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
          
          cadastro.marca === marca &&
          cadastro.numeroTelefone === telefone &&
          cadastro.vendedor === vendedor &&
          cadastro. cnpj ===  cnpj

        ) {
          encontrou = true;
          break;
        }
      }
  
      // Verifica se encontrou correspondência
      if (encontrou) {
        alert("Cadastro existente!")
        window.location.href = "exibir.html" //Se o cadastro existir e estiver correto ele leva o usuário para a outra tela
      } else {
        alert("O cadastro inexistente.");
      }
    } else {
      alert("Não há dados armazenados.");
    }
  }


  