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

var mensagens = []

var database = firebase.database()
// Referencia das mensagens
var mensagensRef = database.ref('mensagens')

mensagensRef.on('value', snapshot => {
    let data = Object.values(snapshot.val())

    mensagens = data
})

setTimeout(function(){
    for(m of mensagens){
        console.log(m)
        appendNoSite(m)
    }
}, 1500)

function appendNoSite(m){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "divComentarios")
    var newNome = document.createElement("h1");
    newNome.setAttribute("class", "tituloComentario")
    var newEmail = document.createElement("h3");
    newEmail.setAttribute("class", "pAppend")
    var newMensagem = document.createElement("p");
    newMensagem.setAttribute("class", "pAppend")

    newNome.innerHTML = m.nome;
    newEmail.innerHTML = m.email;
    newMensagem.innerHTML = m.mensagem;

    newDiv.appendChild(newNome);
    newDiv.appendChild(newEmail);
    newDiv.appendChild(newMensagem);

    var divAtual = document.getElementById("javascript");
    document.body.insertBefore(newDiv, divAtual);

}
