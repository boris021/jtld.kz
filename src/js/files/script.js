// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


ymaps.ready(function () {
	let myMap = new ymaps.Map('map', {
			center: [43.36085701166484,76.98143061852832],
			zoom: 19
		}, {
			searchControlProvider: 'yandex#search'
		}),

		myPlacemark = new ymaps.Placemark([43.36085411190635,76.98229198977083], {
			hintContent: '<b>ЖЕТICУ ЛОГИСТИКС</b>',
			balloonContentHeader: "Адрес:",
			balloonContentBody: "Суюнбая, 493Б, офис 215",
			balloonContentFooter: "Казахстан, г. Алматы",
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'img/common/address.svg',
			// Размеры метки.
			iconImageSize: [40, 50],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -50],
		});
		myMap.controls.remove('geolocationControl'); // удаляем геолокацию
		myMap.controls.remove('searchControl'); // удаляем поиск
		myMap.controls.remove('trafficControl'); // удаляем контроль трафика
		myMap.controls.remove('typeSelector'); // удаляем тип
		myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		myMap.controls.remove('rulerControl'); // удаляем контрол правил
		myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
		myMap.geoObjects.add(myPlacemark) // добавляем свои иконку
});
