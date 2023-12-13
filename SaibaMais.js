const indexes = document.querySelectorAll('.numeros li');
const tabs = document.querySelectorAll('.slid');
const contents = document.querySelectorAll('.slid-content');

function reset() {
  tabs.forEach((tab, i) => {
    indexes[i].style.borderColor = 'transparent';
    tab.style.zIndex = 0;
    tab.classList.remove('active');
    contents[i].classList.remove('active');
  });
}

function showTab(i) {
  indexes[i].style.borderColor = 'rgba(1,161,193,100%)';
  tabs[i].style.opacity = 1;
  tabs[i].style.zIndex = 5;
  tabs[i].classList.add('active');
  contents[i].classList.add('active');
}

function activate(e) {
  if (e.target.matches('.numeros li')) {
    reset();
    showTab(e.target.dataset.index);
  }
}

const init = () => showTab(0);

window.addEventListener('load', init, false);
window.addEventListener('click', activate, false);
