var g_dadosPessoais = {"nome":"","idade":0,"estadoCivil":"","sexo":"","conheceuSite":"","sugestoes":""};

function validarFormulario(){
	var nome = document.getElementById('txtNome').value.trim();
	var idade = document.getElementById('txtIdade').value;
	var estSelecionado = document.getElementById("estCivil")
	var estValue = estSelecionado[estSelecionado.selectedIndex].value;
	var sexo = document.getElementsByName("rdSexo");
	var conheceuSite = document.getElementsByName("cbNossoSite");
	var sugestoes = document.getElementById('txtSugestoes').value;
	if (nome == "") {
		return alert("Nome inválido")
	}
	if (idade < 1 || idade > 130 || idade == "" || idade == " "){
		return alert("Idade inválida")
	}
	if (estValue == "selecione") {
		return alert("Informe seu estado civil")
	}
	var radioValue = null;
	var radioElements = sexo;
	for (var i = 0;  i < radioElements.length; i++){
		if (radioElements[i].checked) {
			radioValue = radioElements[i].value;
		}
	}
	if (radioValue == null){
		return alert("Informe seu sexo")
	}
	var inputElements = conheceuSite;
	var stringFinal = "";
	for (var i = 0; i < inputElements.length; i++){
		if (inputElements[i].checked) {
			stringFinal += inputElements[i].value+" ";
		}
	}
	if (stringFinal == "") {
		return alert("Informe como conheceu nosso site")
	}
	if (sugestoes == "") {
		return alert("Dê sua sugestão")
	}
	document.getElementById("boxConferir").className += "visivel"
	document.getElementById('nomeValidado').innerHTML = nome;
	document.getElementById('idadeValidado').innerHTML = idade;
	document.getElementById('estadoCivilValidado').innerHTML = estValue;
	document.getElementById('sexoValidado').innerHTML = radioValue;
	document.getElementById('conheceuValidado').innerHTML = stringFinal;
	document.getElementById('sugestoesValidado').innerHTML = sugestoes;

	g_dadosPessoais.nome = nome;
	g_dadosPessoais.idade = idade;
	g_dadosPessoais.estadoCivil = estValue;
	g_dadosPessoais.sexo = radioValue;
	g_dadosPessoais.conheceuSite = stringFinal;
	g_dadosPessoais.sugestoes = sugestoes;
}

function enviarDados(){
	localStorage.setItem("nome", g_dadosPessoais.nome);
	localStorage.setItem("idade", g_dadosPessoais.idade);
	localStorage.setItem("estadoCivil", g_dadosPessoais.estadoCivil);
	localStorage.setItem("sexo", g_dadosPessoais.sexo);
	localStorage.setItem("conheceuSite", g_dadosPessoais.conheceuSite);
	localStorage.setItem("sugestoes", g_dadosPessoais.sugestoes);
	alert("Dados gravados com sucesso!")
	window.open("dados.html");
}