const buttons = document.querySelectorAll('.city__btn');
const blocks = document.querySelectorAll('.popular__items_card');


buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
  
      blocks.forEach(popular__items_card => {
        if (popular__items_card.id === targetId) {
            popular__items_card.style.display = 'block';
        } else {
            popular__items_card.style.display = 'none';
        }
      });
    });
  });