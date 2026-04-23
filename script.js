// R9. Menu hambúrguer manual
const menuBtn = document.getElementById('menu-toggle');
const menuContent = document.getElementById('navbarNav');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuContent.classList.toggle('show-menu');
    });
}

// R11. Dark Mode
const btnTema = document.getElementById('btn-tema');
if(btnTema) {
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Salva a preferência se quiser ser chique, mas assim já atende
    });
}

// R10. Validação de Contato
const form = document.getElementById('form-contato');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('mensagem').value;

        if(!nome || !email || !msg) {
            alert("Erro: Preencha todos os campos do formulário!");
        } else {
            alert("Obrigado, " + nome + "! Sua mensagem foi 'enviada'.");
            form.reset();
        }
    });
}