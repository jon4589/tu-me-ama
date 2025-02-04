// Seleciona os elementos do DOM
const noButton = document.getElementById('no');
const question = document.getElementById('question');

// Função para mover o botão "Não" para uma posição aleatória
function moveButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Adiciona um evento de "mouseover" ao botão "Não"
noButton.addEventListener('mouseover', moveButton);

// Adiciona um evento de "click" ao botão "Não" (caso o usuário consiga clicar)
noButton.addEventListener('click', moveButton);

// Adiciona um evento de "click" ao botão "Sim"
document.getElementById('yes').addEventListener('click', () => {
    question.textContent = "Eu sabia que você me ama! ❤️";
});