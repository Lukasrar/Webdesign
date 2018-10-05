// Iniciando o FireBase
var config = {
    apiKey: "AIzaSyCY7bbHOn3LbWRPZuiyeqJeCjaKvpAgL3c",
    authDomain: "contactformcaravel.firebaseapp.com",
    databaseURL: "https://contactformcaravel.firebaseio.com",
    projectId: "contactformcaravel",
    storageBucket: "contactformcaravel.appspot.com",
    messagingSenderId: "777628218104"
};
firebase.initializeApp(config);

// Referencia das mensagens
var mensagens = firebase.database().ref('mensagens')

// Pegando valor dos inputs
function getInput(campo){
    return document.getElementById(campo).value;
}

//Listener de clicks
$('formularioDeContato').addEventListener('submit', enviarFormulario);

//Enviar formulario
function enviarFormulario(e) {
    e.preventDefault();

    //Valores
    var nome = getInput('nome');
    var email = getInput('email');
    var mensagem = getInput('mensagem');

    //Salvar mensagem no Firebase
    salvar(nome, email, mensagem);

    //Alerta de sucesso
    $('sucesso').style.left = '0';

    //Retirada do alerta
    setTimeout(function () {
        $('sucesso').style.left = '-200%';
    }, 3000)

    //Resetando o formulário após o envio
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