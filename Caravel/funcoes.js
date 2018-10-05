function start() {
    $('icone1').style.fontSize = '0px';
    $('icone2').style.fontSize = '0px';
    $('icone3').style.fontSize = '0px';
    $('icone4').style.fontSize = '0px';
}
function openSlideMenu(){
    $('side-menu').style.width = '350px';
}
function closeSlideMenu(){
    $('side-menu').style.width = '0';
}
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

function animateTest(idCampo) {
    $(idCampo).classList.add('headShake');
    var timer = setTimeout(function () {
        $(idCampo).classList.remove('headShake')
    },1000)
}

function animateUl(idCampo) {
    $(idCampo).classList.add('flipInY');
    var timer = setTimeout(function () {
        $(idCampo).classList.remove('flipInY')
    },500)
}
function logoAnimation(idCampo) {
    $(idCampo).classList.add(' flipInY');
    var timer = setTimeout(function () {
        $(idCampo).classList.remove('flipInY')
    },500)
}



function $(campo){
    return document.getElementById(campo);
}