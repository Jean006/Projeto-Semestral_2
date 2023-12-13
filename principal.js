
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollBar: true,
        });
 





    const sliderContainer = document.querySelector('.slider-container')
const slidedireita = document.querySelector('.direita-slide')
const slideesquerda = document.querySelector('.esquerda-slide')
const upButton = document.querySelector('.cima-button')
const downButton = document.querySelector('.baixo-button')
const slidesLength = slidedireita.querySelectorAll('div').length

let activeSlideIndex = 0;

slideesquerda.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('cima'))

downButton.addEventListener('click', () => changeSlide('baixo'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'cima') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    } else if (direction === 'baixo') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }

    slidedireita.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideesquerda.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}



function loading(){
    document.getElementsByClassName('box_load')[0].style.display = "none";
    document.getElementsByClassName('conteudo')[0].style.display = "block"
}







gsap.from(".letras_banner2", { opacity: 0, y: 50, duration: 1, delay: 0.2 });
  gsap.from(".section_2 .texto1-slide, .section_2 .texto2-slide, .section_2 .texto3-slide, .section_2 .textobackground-slide", { opacity: 0, y: 50, stagger: 0.2 });
  gsap.from(".banner_3 .desen, .banner_3 .webs, .banner_3 .inovadoras, .banner_3 .desen-site, .banner_3 .btn_descubra", { opacity: 0, y: 50, stagger: 0.2 });
  gsap.from(".banner_4 .planosp1, .banner_4 .plano-card", { opacity: 0, y: 50, stagger: 0.2 });
  gsap.from(".banner_5 .sobre, .banner_5 .por_que, .banner_5 .agimos, .banner_5 .assim, .banner_5 .busca", { opacity: 0, y: 50, stagger: 0.2 });
  gsap.from(".banner_6 .nossa_historia, .banner_6 .seguindo, .banner_6 .visao, .banner_6 .proposito, .banner_6 .cada_linha", { opacity: 0, y: 50, stagger: 0.2 });
  gsap.from(".banner_7 .nossa_equipe, .banner_7 .card_equipe", { opacity: 0, y: 50, stagger: 0.2 });
  gsap.from(".banner_9 .a, .banner_9 .sua_nova, .banner_9 .web_aqui, .banner_9 .links", { opacity: 0, y: 50, stagger: 0.2 });