

var swiper = new Swiper(".swipe-container", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
      0: {
          slidesPerView: 2,
      },
      568: {
          slidesPerView: 3,
      },
      768: {
          slidesPerView: 4,
      },
      968: {
          slidesPerView: 5,
      },

  }
});


// BACK BUTTON

const backButton = document.querySelector('.back-button');

backButton.addEventListener('click', () => {

window.history.back();
});