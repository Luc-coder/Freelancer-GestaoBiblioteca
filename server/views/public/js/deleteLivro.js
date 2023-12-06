function confirmarExclusao(id, nome) {
    var confirmacao = confirm("Tem certeza que deseja excluir o livro '" + nome + "'?");
    
    if (confirmacao) {
        window.location.href = "/excluirLivro/" + id;
    }
}