// Initialize Firebase
var config = {
    apiKey: "AIzaSyCY7bbHOn3LbWRPZuiyeqJeCjaKvpAgL3c",
    authDomain: "contactformcaravel.firebaseapp.com",
    databaseURL: "https://contactformcaravel.firebaseio.com",
    projectId: "contactformcaravel",
    storageBucket: "contactformcaravel.appspot.com",
    messagingSenderId: "777628218104"
};
firebase.initializeApp(config);

var mensagens = firebase.database().ref('mensagens')



function getInput(campo){
    return document.getElementById(campo).value;
}
$('formularioDeContato').addEventListener('submit', enviarFormulario);
function enviarFormulario(e) {
    e.preventDefault();
    var nome = getInput('nome');
    var email = getInput('email');
    var mensagem = getInput('mensagem');

    salvar(nome, email, mensagem);

    $('sucesso').style.left = '0';
    setTimeout(function () {
        $('sucesso').style.left = '-200%';
    }, 3000)

    $('formularioDeContato').reset();
}


//Salvar mensagens no firebase

function salvar(nome, email, mensagem) {
    var novaMensagem = mensagens.push();
    novaMensagem.set({
        nome: nome,
        email: email,
        mensagem: mensagem
    })
}