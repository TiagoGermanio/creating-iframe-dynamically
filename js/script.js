const grid = document.querySelector('.grid');

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const createCard = (cardPersonagem, urls) => {
  const cardTemplate = createElement('nav', 'card');
  const cardTitle = createElement('h3', 'card-title');
  const cardContent = createElement('div', 'card-content');
  const cardDescription = createElement('div', 'description');
  
  const iframe = createElement('iframe', 'video-style');
  iframe.setAttribute('width', '360');
  iframe.setAttribute('height', '115');
  iframe.setAttribute('allowfullscreen', '');

  cardTemplate.appendChild(cardContent);
  cardContent.appendChild(iframe);
  cardTitle.innerHTML = cardPersonagem;
  cardContent.appendChild(cardTitle);

  
  urls.forEach(url => {
    iframe.setAttribute('src', url);
  });

  return cardTemplate;
};
function clickButtom(){
  
}
function toggle(maisinfo) {
  const el = document.getElementById(maisinfo);
  el.style.display = el.style.display === 'none' ? '' : 'none';
}

const maisinfoDiv = document.getElementById('maisinfo');
document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!maisinfoDiv.contains(targetElement) && targetElement.id !== 'mostrar-maisinfo') {
    maisinfoDiv.style.display = 'none';
  } else if (targetElement.id === 'mostrar-maisinfo') {
    toggle('maisinfo');
  }
});


const loadGame = () => {
  const listaDeVideos = [
    { nome: 'Mu mumuh muh muh', urls: ['https://www.youtube.com/embed/ddOQZbSg2ac']},
    { nome: 'Mumuh muuuuh', urls: ['https://www.youtube.com/embed/B_Z1bJBKncw']},
    { nome: 'Mu muh', urls: ['https://www.youtube.com/embed/bCrz03-OJtY']},
    { nome: 'Mus muh muh', urls: ['https://www.youtube.com/embed/GTlPsWJLOPY']},
    { nome: 'MUUUUUU', urls: ['https://www.youtube.com/embed/P0BcU4le3hA']},
    { nome: 'Muhhhhh mu', urls: ['https://www.youtube.com/embed/LxXjsQbCZR8']},
  ];

  listaDeVideos.forEach((listaV) => {
    const card = createCard(listaV.nome, listaV.urls);
    grid.appendChild(card);
  });
};

loadGame();