<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%String vencedor = (String)request.getAttribute("vencedor");
          String vez = (String)request.getAttribute("vez");
          String jogador1 = (String)request.getAttribute("player1");  
          String jogador2 = (String)request.getAttribute("player2");
          String jogador = "";
            if(vez.equalsIgnoreCase("1")){
                jogador = jogador2;
            } else {
                jogador = jogador1;
            }
        %>
        <style>
            *{
                margin:0px;
                padding:0px;
            }
            .centralizar{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                width: 100%;
                text-align: right;
                background-color: green;
            }
            
        </style>
    </head>
    <body>
        <div class="centralizar">
            <h1>Parabéns você ganhou <%=jogador%></h1>
        </div>
    </body>
</html>
