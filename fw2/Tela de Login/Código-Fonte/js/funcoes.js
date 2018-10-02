function playAudio(audio) {
    document.getElementById(audio).play();
}
function pauseAudio(audio) {
    var controle = document.getElementById(audio);
    controle.pause();
    controle.currentTime = 0;
}
function validarFormulario(form) {
    inputs = document.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++) {
        if (((inputs[i].type == "text") || (inputs[i].type == "password")) && (inputs[i].value == "")) {
            alert(inputs[i].name.toUpperCase() + " não pode estar em branco. Favor preencher!");
            break;
        }
    }
}