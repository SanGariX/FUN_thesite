import mobileMenu from './js/header.js';
import { cookiePolicy } from './js/cookiesPolicy.js';
import swiperService from './js/serviceSwiper.js';
import swiperReviews from './js/reviewsSwiper.js';
import swiperFaq from './js/faq.js';

mobileMenu();
cookiePolicy();
swiperService();
swiperReviews();
swiperFaq();

const checkbox = document.querySelector('#accept');
const lableAccept = document.querySelector('.form_lable_flex_checkbox');
checkbox.addEventListener('change', ({ target }) => {
  if (target.checked) {
    lableAccept.classList.add('active');
  } else {
    lableAccept.classList.remove('active');
  }
});
