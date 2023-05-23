// Seleciona o formulário e o botão de login
var form = document.querySelector('.login__form');
var button = document.querySelector('#login__button');

// Adiciona um manipulador de evento no botão
button.addEventListener('click', function (event) {
    event.preventDefault(); // previne o envio do formulário

    // Pega os valores dos campos de nome de usuário e senha
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    // Verifica se o nome de usuário e a senha são iguais a "admin" e "12345", respectivamente
    if (username === 'admin' && password === '12345') {
        // Redireciona para o site principal
        window.location.href = 'index.html';
    } else {
        // Mostra uma mensagem de erro
        alert('Nome de usuário ou senha incorretos!');
    }
});
