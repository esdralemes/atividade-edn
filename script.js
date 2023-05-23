// Seleciona o botão e a caixa de seleção
var botao = document.getElementById('section__btn');
var select = document.getElementById('curriculos');

// Adiciona um manipulador de evento no botão
botao.addEventListener('click', function () {
    // Pega o valor da opção selecionada
    var curriculo = select.value;

    // Cria um link para o arquivo correspondente
    var link = document.createElement('a');
    link.href = curriculo;

    link.target = '_blank';

    // Clica no link para abrir o currículo em uma nova aba
    link.click();
});


