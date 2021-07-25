
for (let i = 0; i <= 13; i += 1) {
  const img = document.createElement('img');
  img.src = `./images/f${i}.jpg`;
  img.className = 'card';
  const card = document.createElement('div');
  card.className = 'item'
  card.appendChild(img);
  const cardContainer = document.querySelector('.owl-theme');
  cardContainer.appendChild(card);
}
