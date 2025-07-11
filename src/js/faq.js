import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperFaq = () => {
  new Swiper('.swiper-faq', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 800,
    grabCursor: true,
    pagination: {
      // <--- Додаємо пагінацію
      el: '.swiper-pagination_faq',
      clickable: true,
      type: 'bullets', // Кружечки
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
};

export default swiperFaq;
