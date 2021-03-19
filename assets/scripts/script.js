function acender(){
    remover_apagado();
    document.getElementById("acordado").style.display = "flex";
    document.getElementById("bg").classList.add("bg_acordado");
    document.getElementById("header_bg").classList.add("bg_acordado");
    document.getElementById("caixa_texto_balao").style.display = "block";
    document.getElementById("caixa_texto_complemento").style.display = "block"; 
    document.getElementById("lampada_acesa").style.display = "block";
}

function apagar(){
    remover_aceso();
    document.getElementById("dormindo_img").style.display = "flex";
    document.getElementById("bg").classList.remove("bg_acordado");
    document.getElementById("header_bg").classList.remove("bg_acordado");
    document.getElementById("dormindo_text").style.display = "block";
    document.getElementById("caixa_texto_complemento").style.display = "none";
    document.getElementById("lampada_apagada").style.display = "block";
}

function remover_apagado(){
    document.getElementById("dormindo_img").style.display = "none";
    document.getElementById("dormindo_text").style.display = "none";
    document.getElementById("lampada_apagada").style.display = "none";
}

function remover_aceso(){
    document.getElementById("acordado").style.display = "none";
    document.getElementById("caixa_texto_balao").style.display = "none";
    document.getElementById("caixa_texto_complemento").style.display = "none";
    document.getElementById("lampada_acesa").style.display = "none";
}