function $(campo){
    return document.getElementById(campo);
}

var bolsonaro = $('bolsonaro')
var haddad = $('haddad')
var ciro = $('ciro')
var geraldo = $('geraldo')

bolsonaro.addEventListener("click", votarBolsonaro);
haddad.addEventListener("click", votarHaddad);
ciro.addEventListener("click", votarCiro);
geraldo.addEventListener("click", votarGeraldo);


var votosTotalBolso = 0;
var votosTotalHaddad = 0;
var votosTotalCiro = 0;
var votosTotalGeraldo = 0;

var maisVotado = 0;

function votarBolsonaro() {
    votosTotalBolso++;
    console.log(votosTotalBolso);
    $('votosBolsonaro').innerHTML = votosTotalBolso
    verifica();
}
function votarHaddad() {
    votosTotalHaddad++;
    console.log(votosTotalHaddad);
    $('votosHaddad').innerHTML = votosTotalHaddad
    verifica();
}
function votarCiro() {
    votosTotalCiro++;
    console.log(votosTotalCiro);
    $('votosCiro').innerHTML = votosTotalCiro
    verifica();
}
function votarGeraldo() {
    votosTotalGeraldo++;
    console.log(votosTotalGeraldo);
    $('votosGeraldo').innerHTML = votosTotalGeraldo
    verifica();
}

function verifica() {
    if(votosTotalBolso>votosTotalHaddad && votosTotalBolso>votosTotalCiro && votosTotalBolso>votosTotalGeraldo){
        $('divBolsonaro').style.backgroundColor = '#77953d';
        $('divHaddad').style.backgroundColor = '#c3d79c';
        $('divCiro').style.backgroundColor = '#c3d79c';
        $('divGeraldo').style.backgroundColor = '#c3d79c';
    }
    else if(votosTotalHaddad>votosTotalBolso && votosTotalHaddad>votosTotalCiro && votosTotalHaddad>votosTotalGeraldo ){
        $('divHaddad').style.backgroundColor = '#77953d';
        $('divBolsonaro').style.backgroundColor = '#c3d79c';
        $('divCiro').style.backgroundColor = '#c3d79c';
        $('divGeraldo').style.backgroundColor = '#c3d79c';
    }
    else if(votosTotalCiro>votosTotalBolso && votosTotalCiro>votosTotalHaddad && votosTotalCiro>votosTotalGeraldo ){
        $('divCiro').style.backgroundColor = '#77953d';
        $('divHaddad').style.backgroundColor = '#c3d79c';
        $('divBolsonaro').style.backgroundColor = '#c3d79c';
        $('divGeraldo').style.backgroundColor = '#c3d79c';
    }
    else if(votosTotalGeraldo>votosTotalBolso && votosTotalGeraldo>votosTotalHaddad && votosTotalGeraldo>votosTotalCiro ){
        $('divGeraldo').style.backgroundColor = '#77953d';
        $('divCiro').style.backgroundColor = '#c3d79c';
        $('divHaddad').style.backgroundColor = '#c3d79c';
        $('divBolsonaro').style.backgroundColor = '#c3d79c';
    }
}

