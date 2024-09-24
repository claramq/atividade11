console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para mudar a cor do fundo
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Muda a cor do fundo a cada segundo
setInterval(changeBackgroundColor, 1000);

// Muda a cor imediatamente ao carregar a página
changeBackgroundColor();

// Cria um elemento de texto
const textElement = document.createElement('div');
textElement.textContent = 'Olá, Mundo!';
textElement.style.position = 'absolute';
textElement.style.fontSize = '48px';
textElement.style.color = 'blue';
textElement.style.transition = 'transform 1s';
document.body.appendChild(textElement);

// Função para mover o texto aleatoriamente
function moveText() {
    const x = Math.random() * (window.innerWidth - 200); // Largura do texto
    const y = Math.random() * (window.innerHeight - 50); // Altura do texto
    textElement.style.transform = `translate(${x}px, ${y}px)`;
}

// Mova o texto a cada 2 segundos
setInterval(moveText, 2000);

// Mova o texto imediatamente na carga da página
moveText();




let score = 0; // Pontuação inicial
const scoreElement = document.createElement('div');
scoreElement.style.fontSize = '24px';
scoreElement.style.position = 'absolute';
scoreElement.style.bottom = '10px'; // Posição no fundo da tela
scoreElement.style.right = '10px'; // Posição à direita da tela
document.body.appendChild(scoreElement);

const button = document.createElement('button');
button.textContent = 'Clique em Mim!';
button.style.position = 'absolute';
document.body.appendChild(button);

// Função para mover o botão para uma posição aleatória
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100); // 100 é a largura do botão
    const y = Math.random() * (window.innerHeight - 50); // 50 é a altura do botão
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Função para atualizar a pontuação
function updateScore() {
    score++;
    scoreElement.textContent = `Pontuação: ${score}`;
    moveButton(); // Move o botão após clicar
}

// Inicia o movimento do botão
moveButton();
button.addEventListener('click', updateScore);

// Mover o botão a cada 2 segundos
setInterval(moveButton, 2000);