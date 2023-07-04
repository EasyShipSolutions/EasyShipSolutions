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

