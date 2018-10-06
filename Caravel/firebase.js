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

function salvar(nome, email, mensagensRef) {
    var novaMensagem = mensagensRef.push();
    novaMensagem.set({
        nome: nome,
        email: email,
        mensagem: mensagem
    })
}

//Pegando elementos do login
const txtEmail =document.getElementById('emailLogin');
const txtPass =document.getElementById('senhaLogin');
const btnLogin =document.getElementById('btnLogin');
const btnLogout =document.getElementById('btnLogout');
var navAdm =document.getElementById('comentarios');
var sideNavAdm =document.getElementById('sideNavComentarios');

//login
btnLogin.addEventListener('click', e =>{
    //Pegando valores do email e da senha
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();

    //logar
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => {
        if(e.code == 'auth/user-not-found'){
            console.log('nao tem esse usuario!')
        }
    });

    //Listener de logout
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    //Verificando se há usuario logado
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log("Usuario logado: "+txtEmail.value);
            console.log(firebaseUser);
            navAdm.classList.remove('hide')
            sideNavAdm.classList.remove('hide')
            btnLogout.classList.remove('hide');
        } else {
            navAdm.classList.add('hide')
            sideNavAdm.classList.remove('hide')
            console.log("Usuario "+txtEmail.value+" fez logout");
            btnLogout.classList.add('hide');

        }
    })
})