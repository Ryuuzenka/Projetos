const paragrafo = document.querySelector('p');

const botao = document.createElement('button');

    botao.textContent = 'Clique para ver uma mensagem!';

    paragrafo.insertAdjacentElement('afterend', botao);

const mensagem = document.createElement('p');
        mensagem.style.fontFamily = 'Arial';
        mensagem.style.color = "blue";
        
    botao.insertAdjacentElement('afterend', mensagem);
    botao.addEventListener('click', () => {
        mensagem.textContent = 'Boas vindas, professores. Espero que tenha ficado bom!';
});


