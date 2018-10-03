var nome;
var contador;
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

function assustado(){
    document.getElementById("imagem").src='imagens/Assustado.png'
    document.getElementById('bg').style.backgroundColor = "#ff7675";
    clearTimeout(contador);
}
function pensativo(){
    document.getElementById("imagem").src='imagens/Pensativo.png'
    document.getElementById('bg').style.backgroundColor = "#ffeaa7";
    document.getElementById('interacao').innerHTML = "Não demore viu!";
    clearTimeout(contador);
}
function pensativo2() {
    contador = setTimeout(nervoso,3000);
}
function alegre(){
    document.getElementById("imagem").src='imagens/Alegre.png'
    document.getElementById('bg').style.backgroundColor = "#74b9ff";
    document.getElementById('interacao').innerHTML = "Gosto quando você interage comigo!";
    clearTimeout(contador);
    pensativo2();
}
function nervoso(){
    document.getElementById("imagem").src='imagens/Nervoso.png'
    document.getElementById('bg').style.backgroundColor = "#d63031";
    document.getElementById('interacao').innerHTML = nomejogador+" ,cadê vocêêêêêêê?";
}
