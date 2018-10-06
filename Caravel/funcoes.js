//Zerar font-size dos icones do footer
function start() {
    $('icone1').style.fontSize = '0px';
    $('icone2').style.fontSize = '0px';
    $('icone3').style.fontSize = '0px';
    $('icone4').style.fontSize = '0px';
}
//Abrir o menu lateral
function openSlideMenu(){
    $('side-menu').style.width = '350px';
}
//Fechar menu lateral
function closeSlideMenu(){
    $('side-menu').style.width = '0';
}
//Abrir icone no footer
function abrirFooter1() {
    $('icone1').style.fontSize = '20px';
}
function fecharFooter1(){
    $('icone1').style.fontSize = '0px';
}
function abrirFooter2() {
    $('icone2').style.fontSize = '20px';
}
function fecharFooter2() {
    $('icone2').style.fontSize = '0px';
}
function abrirFooter3() {
    $('icone3').style.fontSize = '20px';
}
function fecharFooter3() {
    $('icone3').style.fontSize = '0px';
}

//Ativar animate.css nos campos que foram submetidos
function animateTest(idCampo) {
    $(idCampo).classList.add('headShake');
    var timer = setTimeout(function () {
        $(idCampo).classList.remove('headShake')
    },1000)
}
//Ativar animate.css nos campos que foram submetidos
function animateUl(idCampo) {
    $(idCampo).classList.add('flipInY');
    var timer = setTimeout(function () {
        $(idCampo).classList.remove('flipInY')
    },500)
}

function abreDivLogin() {
    $('loginAdm').style.top = '100px';
}
function fechaDivLogin() {
    $('loginAdm').style.top = '-1000px';
}

//Função que retorna document.getElementById
function $(campo){
    return document.getElementById(campo);
}