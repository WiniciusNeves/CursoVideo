<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro programa em JS</title>
    <style>
        body{
            background-color: hwb(180 30% 17%);
            color: white; /*isso aqui e um comentario em css*/
            font:  normal 15pt Arial;
        }
        h1{
            color: hsla(240, 68%, 48%, 0.534);
        }

    </style>
</head>
<body>
    <script>    
     var n1 = Number(prompt("informe um numero qualquer"))
     var n2 = Number(prompt("informe outro numero qualquer"))
        var s =  n1 + n2
        alert(`a soma entre ${n1} é ${n2} e igual a ${s}`)
    </script>
</body>
</html>
