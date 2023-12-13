



let cards_equipe = document.querySelectorAll(".card_equipe");

cards_equipe.forEach(card_equipe => card_equipe.addEventListener("mouseover", (e) => {
  cards_equipe.forEach(card_equipe => card_equipe.classList.remove('active'));
  e.target.classList.add('active');
}));


