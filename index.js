let paragrafo = document.querySelector("p");
let paragrafos =  document.querySelectorAll("p");
let =  botao = document.querySelector("button");
let = botaoPreto = document.querySelector("#preto");
let = botaoRd = document.querySelector("#vermelho");
let = voar = document.querySelector("#gif");
botao.onclick = pintarAzul;

botaoPreto.onclick = pintarPreto;

botaoRd.onclick =  pintarVermelho;

aguia.onclick = voar;

function voar(){
    aguia.style.transform="translateX(1000px)";
}

function pintarVermelho(){
    for(let p of paragrafos){
        p.style.color="red";
    }
}

function pintarPreto(){
    for(let p of paragrafos){
        p.style.color="black";  
    }
}

function pintarAzul(){
    for(let p of paragrafos){
        p.style.color='blue';
    }
}