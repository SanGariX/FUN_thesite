import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperReviews = () => {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 800,
    grabCursor: true,
    pagination: {
      // <--- Додаємо пагінацію
      el: '.swiper-pagination_reviews',
      clickable: true,
      type: 'bullets', // Кружечки
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
};

export default swiperReviews;
