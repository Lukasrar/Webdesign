var nome;
var contador;
var funciona = true;
function validar() {
     nome = document.getElementById("nomeJogador").value.trim();
    if (nome == ""){
        return alert("nome invalido")
    }else{
        localStorage.setItem('nome', nome);
        window.open("jogo.html", '_self')

    }
}
var nomejogador = localStorage.getItem('nome');
document.getElementById('name').innerHTML += nomejogador;

var imagem = $("imagem");
var interacao = $("interacao");

imagem.addEventListener("mouseover", assustado);
imagem.addEventListener("mouseout", pensativo);
imagem.addEventListener("click", alegre);

function assustado(){
    imagem.src='imagens/Assustado.png'
    $('bg').style.backgroundColor = "#ff7675";
}
function pensativo(){
    imagem.src='imagens/Pensativo.png'
    $('bg').style.backgroundColor = "#ffeaa7";
}
function alegre(){
    imagem.removeEventListener("mouseover", assustado);
    imagem.removeEventListener("mouseout", pensativo);
    imagem.addEventListener("mouseout", alegreOut);
    imagem.addEventListener("mouseover", alegre);
    imagem.src='imagens/Alegre.png';
    $('bg').style.backgroundColor = "#74b9ff";
    interacao.innerHTML = "Gosto quando você interage comigo!";
    clearTimeout(contador);
}
function nervoso(){
    imagem.src='imagens/Nervoso.png'
    $('bg').style.backgroundColor = "#d63031";
    interacao.innerHTML = nomejogador+" ,cadê vocêêêêêêê?";
}
 function alegreOut(){
    interacao.innerHTML = "Não demore viu!";
    contador = setTimeout(nervoso, 3000);
}


function $(campo){
    return document.getElementById(campo);
}