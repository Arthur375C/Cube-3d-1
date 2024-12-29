window.addEventListener('beforeunload', function (event) {
    // Mensagem personalizada (não será exibida na maioria dos navegadores modernos)
    const message = 'Tem certeza que quer sair?';
    event.preventDefault();
    event.returnValue = message; // Mensagem personalizada ignorada em alguns navegadores
    return message; // Para compatibilidade
});
