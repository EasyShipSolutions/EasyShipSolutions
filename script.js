//SELECIONANDO OS ITENS
const form = document.querySelector('#cadastro-fornecedor')
const name = document.querySelector('#name')
const brand = document.querySelector('#brand')
const cnpj = document.querySelector('#cnpj')
const addres = document.querySelector('#addres')
const number = document.querySelector('#number')
const seller = document.querySelector('#seller')

/*
//Função para validar o cnpj, passando como parâmetro a minha const cnpj
function validaCNPJ (cnpj){ 
    var b = [6,5,4,3,2,9,8,7,6,5,4,3,2]; //Números que serão multiplicados para a validação do cnpj
    var c = String(cnpj).replace(/[^\d]/g,''); //Removendo os caracteres não numéricos

    if(c.length !== 14){ //Verificando se o cnpj possui 14 digitos

    return false; //Caso não possua ele retorna false
    }

    //Realizando a primeira verificação
    for(var i = 0; n = 0; i < 12, n += c[i] * b[++i]); //o resultado tem que ser igual ao penultimo número do cnpj que é o primeiro digito verificador
    
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n )){
     
        
    return false;
    }

     //Realizando a segunda verificação
     for(var i = 0; n = 0; i < 12, n += c[i] * b[++i]); //o resultado tem que ser igual ao ultimo número do cnpj que é o segundo digito verificador
    
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n )){
           
        return false;
    }

  return true;
}
*/

form.addEventListener("submit",(event)  => { //Cria um evento de enviar para a nossa função event

    event.preventDefault(); //Faz a verificação primeiro antes de enviar o formulário   

    //Verifica se o nome está vazio
    if(name.value === ""){
        alert("Por favor, preencha o nome fantasia");
        return;
    }

    //Se o campo brand foi preenchido
    if(brand.value === ""){
        alert("Por favor, preencha o nome da marca");
    }

   
    /* 
    //Se o cnpj é valido
    if(validaCNPJ(cnpj) === false){
        alert("Por favor, preencha um cnpj válido");
    }
*/

   //Se o campo cnpj estiver vazio
   if(cnpj.value === ""){
    alert("Por favor, preencha o seu cnpj");
   }
    //Se o campo Endereço estiver vazio
    if(addres.value === ""){
     alert("Por favor, preencha um endereço");
    }

    
    //Se o campo telefone estiver vazio
    if(number.value === ""){
        alert("Por favor, preencha seu número de telefone");
       }

    
    //Se o campo telefone estiver vazio
    if(seller.value === ""){
        alert("Por favor, preencha o nome do vendedor");
       }

    salvaDados();
    //Se os campos do form estiverem preenchidos corretamente, ele irá enviar o form
    form.submit();

});

//Função para salvar as informações do form
function salvaDados(){

  //capturando o valor dos inputs
  const dados = { 

    nome: name.value,
    marca: brand.value,
    cnpj: cnpj.value,
    endereco: addres.value,
    numero: number.value,
    vendedor: seller.value

  };

  window.dadosFornecedor = dados;   

 
console.log(window.dadosFornecedor);  
}