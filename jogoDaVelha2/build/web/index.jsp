<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>
            function mandar(){
                nome1 = document.getElementById("jogador1").value.trim();
                nome2 = document.getElementById("jogador2").value.trim();
                if(nome1 == ""){
                    alert("coloque o nome do primeiro jogador");
                } else if (nome2 == ""){
                    alert("coloque o nome do segundo jogador");
                } else{
                    document.getElementById("form").submit();
                }
            }
        </script>
    </head>
    <body>
        <h1>JOGO DA VELHA</h1>
        <form id="form" action="Servlet" method="GET">
            <input type="hidden" name="vencedor" value="f">
            <input type="hidden" name="table" value="a,a,a,a,a,a,a,a,a">
            <input type="hidden" name="vez" value="1">
            <label for="jogador1">Jogador 1:</label>
            <input type="text" name="player1" id="jogador1">
            <label for="jogador2">Jogador 2:</label>
            <input type="text" name="player2" id="jogador2">
            <input type="button" onclick="mandar()" value="JOGAR">
        </form>
    </body>
</html>