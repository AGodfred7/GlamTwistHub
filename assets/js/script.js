window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
  } else {
      header.classList.remove('header-scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function () {
const cards = document.querySelectorAll('.card');
let flippedCard = null;

cards.forEach(card => {
  card.addEventListener('click', function () {
    const cardInner = this.querySelector('.card-inner');
    
    if (flippedCard && flippedCard !== cardInner) {
      flippedCard.style.transform = 'rotateY(0)';
    }
    
    if (cardInner.style.transform === 'rotateY(180deg)') {
      cardInner.style.transform = 'rotateY(0)';
      flippedCard = null;
    } else {
      cardInner.style.transform = 'rotateY(180deg)';
      flippedCard = cardInner;
    }
  });
});
});



