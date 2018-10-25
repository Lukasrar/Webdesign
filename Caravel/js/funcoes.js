//Abrir o menu lateral
function openSlideMenu(){
    $('side-menu').style.width = '350px';
    $('btnNav').style.display = 'none';
}
//Fechar menu lateral
function closeSlideMenu(){
    $('side-menu').style.width = '0';
    $('btnNav').style.display = 'block';

}


frases = [
    {
        frase: '"As casas são construídas para que se viva nelas, não para serem olhadas."',
        autor: "Francis Bacon",
    },
    {
        frase: '"Viver sem filosofar é o que se chama ter os olhos fechados sem nunca os haver tentado abrir."',
        autor: "René Descartes",
    },
    {
        frase: '"Uma vida sem desafios não vale a pena ser vivida."',
        autor: "Sócrates",
    },
];

 i = -1;

function trocarFrase() {
    i++;
    $('divFrase').classList.add('slideInLeft');
    $('frases').innerHTML = frases[i].frase;
    $('autor').innerHTML = frases[i].autor;
    if(i == 2){
        i=-1;
    }
    var timer = setTimeout(function(){
        trocarFrase();
    },5000);

}




//Função que retorna document.getElementById
function $(campo){
    return document.getElementById(campo);
}
