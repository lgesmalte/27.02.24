// O código dentro do bloco de uma função contém as instruções que serão executadas quando a função for chamada.
function verificarLogin() {
    
    // tem o propósito de selecionar um elemento HTML com um determinado ID e guardar esse elemento em uma variável chamada txtlogin.
    let txtlogin = document.getElementById('txtLogin');
    
    // Essa referência pode ser usada para interagir com o campo de senha na página, seja para obter ou definir o valor do campo, manipular eventos associados a ele, entre outras operações.
    let txtsenha = document.getElementById('txtsenha');

    // em JS é uma declaração de variável que cria uma variável chamada login e atribui a ela o valor "teste".
    let login = "teste";
    
    // após a execução dessa linha de código, a variável senha terá a string "teste". Você pode usar essa variável em outras partes do seu código, referindo-se a ela pelo nome senha para ter ou mudar seu valor.
    let senha = "teste";

    // verifica se os valores dos campos de login e senha correspondem a valores específicos.
    if (txtLogin.value == login && txtsenha.value == senha) {
        
    
        console.log("Logado com sucesso!");
    } else {
        console.log("Login ou senha incorretos! Digite e tente novamente.");
    }
}