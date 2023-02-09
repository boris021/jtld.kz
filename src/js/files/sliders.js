/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.work-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.work-slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			speed: 300,
			loop: true,
			
			navigation: {
				prevEl: '.work-button-prev',
				nextEl: '.work-button-next',
			},

			slidesPerView: 1,
			spaceBetween: 20,
			slidesPerView: 1.5,
			breakpoints: {
				479.98: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1.5,
				},
				767.98: {
					slidesPerView: 1.5,
				},
				991.98: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1299.98: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('.reviews-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews-slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			speed: 300,
			loop: true,
			
			navigation: {
				prevEl: '.reviews-button-prev',
				nextEl: '.reviews-button-next',
			},

			slidesPerView: 1,
			spaceBetween: 20,
			slidesPerView: 1.3,
			breakpoints: {
				479.98: {
					slidesPerView: 1.5,
				},
				600: {
					slidesPerView: 2,
				},
				767.98: {
					slidesPerView: 2.5,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1299.98: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});