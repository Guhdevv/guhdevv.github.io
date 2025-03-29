<?php
include('conexao.php');


if(isset($_POST['email']) || isset($_POST['senha'])) {

    if(strlen($_POST['email']) == 0) {
        echo "Preencha seu e-mail";
    }   else if (strpos($_POST['email'], '@') === false) { // Verifica se o caractere "@" está presente
        echo "Verifique o e-mail digitado";
    } else if (strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else if (strlen($_POST['senha']) < 6) {
        echo "A senha deve ter mais de 6 digitos";
    } else {
        $nome = $mysqli->real_escape_string($_POST['nome']);
        $email = $mysqli->real_escape_string($_POST['email']);
        //$senha = $mysqli->real_escape_string($_POST['senha']);
        $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

        // Verifica se o email já está cadastrado
        $sql_code = "SELECT * FROM usuarios WHERE email = '$email'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

        if($sql_query->num_rows > 0) {
            echo "E-mail já cadastrado!";
        } else {
            // Insere o novo usuário no banco de dados
            //  $token = bin2hex(random_bytes(50));
            $sql_code = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome','$email', '$senha')";
            if($mysqli->query($sql_code)) 
                 { echo "Cadastro ok!";

                header("Location: index.html");
} 
                 else {
                echo "Falha ao cadastrar: " . $mysqli->error;
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <h1>Tela de Cadastro</h1>
    <form action="" method="post">
        <p>
            <label>Nome</label>
            <input type="text" name="nome">
        </p>
        <p>
            <label>Email</label>
            <input type="text" name="email">
        </p>
        <p>
            <label>Senha</label>
            <input type="password" name="senha">
        </p>    
        <p>
            <button type="submit">Cadastrar</button>
        </p>
    </form>
    <p>Já tem uma conta? <a href="index.php">Faça login</a></p>
</body>
</html>