<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = filter_input(INPUT_POST, 'password');
$telefone = $_POST['telefone'];

include "../includes/conexao.php";

$sqlInserir = "INSERT INTO cadastro_cliente(nome, email, senha, telefone) 
VALUES(
    '{$nome}' ,
    '{$email}' ,
    '{$senha}',
    '{$telefone}'
    
    );";

$resultado = mysqli_query($conexao, $sqlInserir);

if($resultado){
    echo"<script type = 'text/javascript'> alert('Cadastro realizado com sucesso') </script>";
    echo "<script type = 'text/javascript'>window.location.href = 'clientes/medidas.php'</script>";
}else{
    echo "Algum erro aconteceu.";
   
}
?>