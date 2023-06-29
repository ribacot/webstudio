const listPortfolioEl = document.querySelectorAll('.section-text');
const btnsSelectEls = document.querySelector('.js-portfolio-select');

btnsSelectEls.addEventListener('click', onSelect);

function onSelect(e) {
  const { textContent } = e.target;
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  [...listPortfolioEl].map(el => (el.closest('.item').style.display = 'block'));

  [...listPortfolioEl]
    .filter(({ textContent: text }) => text !== textContent)
    .map(el => {
      el.closest('.item').style.display = 'none';
    });
  if (textContent.toLowerCase() === 'all') {
    [...listPortfolioEl].map(
      el => (el.closest('.item').style.display = 'block')
    );
  }
}
