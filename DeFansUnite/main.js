// Localiza o botão no HTML
const trocarTema = document.getElementById('trocar-tema');
// Localiza o body no HTML
const body = document.body;

trocarTema.addEventListener('click', () =>{
    body.classList.toggle('tema-escuro');
})