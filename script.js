// Espera até que o documento esteja totalmente carregado
$(document).ready(function() {
    // Adiciona um evento de submit ao formulário com id 'taskForm'
    $('#taskForm').submit(function(event) {
        // Impede o comportamento padrão do formulário de recarregar a página
        event.preventDefault();
        // Obtém o valor do campo de texto com id 'taskInput'
        let taskText = $('#taskInput').val();
        // Verifica se o campo de texto não está vazio
        if (taskText !== "") {
            // Cria um novo elemento <li> e define seu texto como o valor da tarefa
            let taskItem = $('<li></li>').text(taskText);
            // Adiciona o novo item de tarefa à lista com id 'taskList'
            $('#taskList').append(taskItem);
            // Limpa o campo de texto
            $('#taskInput').val("");
        }
    });
    // Adiciona um evento de clique aos itens da lista (elementos <li>)
    $('#taskList').on('click', 'li', function() {
        // Alterna a classe 'completed' no item clicado
        $(this).toggleClass('completed');
    });
});
