document.addEventListener('DOMContentLoaded', () => {

	//Фиксация хедера
	function stickyHeader() {
		const header = document.querySelector('.header');
		let indentTop;
		let scrollPrev = 0;

		function listenScroll (indentTop) {
			window.addEventListener('scroll', () => {
				scrolled = window.pageYOffset;

				if (scrolled > indentTop && scrolled > scrollPrev) {
					header.classList.add('header_out');
				} else {
					header.classList.remove('header_out');
					header.classList.add('header_full-screen');
				}

				if (scrolled < indentTop) {
					header.classList.remove('header_out');
					header.classList.remove('header_full-screen');
				} 
	
				scrollPrev = scrolled;
			})
		}

		if (window.matchMedia("(min-width: 1201px)").matches) indentTop = 58;
		if (window.matchMedia("(max-width: 1200px)").matches) indentTop = 27;

		scrolled = window.pageYOffset;

		if (scrolled > indentTop) {
			header.classList.add('header_out');
			listenScroll(indentTop);
		} else {
			listenScroll(indentTop);
		}

		// if (window.matchMedia("(min-width: 1201px)").matches) {
		// 	window.addEventListener('scroll', () => {
		// 		let scrolled = window.pageYOffset;

		// 		if (scrolled > 58 && scrolled > scrollPrev) {
		// 			header.classList.add('header_out');
		// 		} else {
		// 			header.classList.remove('header_out');
		// 			header.classList.add('header_full-screen');
		// 		}

		// 		if (scrolled < 58 ) {
		// 			header.classList.remove('header_out');
		// 			header.classList.remove('header_full-screen');
		// 		} 
	
		// 		scrollPrev = scrolled;
		// 	})
		// }

		// if (window.matchMedia("(max-width: 1200px)").matches) {
		// 	window.addEventListener('scroll', () => {
		// 		let scrolled = window.pageYOffset;

		// 		if (scrolled > 27 && scrolled > scrollPrev) {
		// 			header.classList.add('header_out');
		// 		} else {
		// 			header.classList.remove('header_out');
		// 			header.classList.add('header_full-screen');
		// 		}

		// 		if (scrolled < 27 ) {
		// 			header.classList.remove('header_out');
		// 			header.classList.remove('header_full-screen');
		// 		} 
	
		// 		scrollPrev = scrolled;
		// 	})
		// }
	}
	stickyHeader();
	
	// Панель поиска
    function toggleSearch() {
		const btn = document.querySelector('#btn-search');
		const panel = document.querySelector('.search__panel');

		if (btn) {
			btn.addEventListener('click', (e) => {
				e.stopPropagation();
				panel.classList.toggle('open');
	
				document.addEventListener('click', (e) => {
					let target = e.target;
					let its_panel = target == panel || panel.contains(target);
					let panel_is_active = panel.classList.contains('open');
					
					if (!its_panel && panel_is_active) {
						panel.classList.toggle('open');
					}
				})
			})
		}
	}
    toggleSearch();

	// Кнопка бургера
	function toggleBurger() {
		const body = document.querySelector('.page');
		const nav = document.querySelector('.header__mobile');
		const navLinks = document.querySelectorAll('.nav__link');
		const burger = document.querySelector('.burger');
		
		const toggleClasses = () => {
			burger.classList.toggle('burger_open');
			nav.classList.toggle('header__mobile_open');
			body.classList.toggle('page_open');
		}

		burger.addEventListener('click', toggleClasses);
		navLinks.forEach(link => link.addEventListener('click', toggleClasses))
	}
	toggleBurger();

	// Открытие окон в блоке "О нас" при клике на маркер
	function toggleMarkers() {
		const markers = document.querySelectorAll('.about__marker');

		markers.forEach(marker => marker.addEventListener('click', () => {
			if(marker.classList.contains('about__marker_active')) {
				marker.classList.toggle('about__marker_active');
			} else {
				markers.forEach(marker => marker.classList.remove('about__marker_active'));
				marker.classList.toggle('about__marker_active');
			}
		}))
	}
	toggleMarkers();

	// Tooltip на странице "О нас"
	function toggleTooltip() {
		let button = document.querySelector('.info__tooltip-button');
		let textWindow = document.querySelector('.info__tooltip-window');

		const toggle = () => {
			button.classList.toggle('info__tooltip-button_active');
			textWindow.classList.toggle('info__tooltip-window_active');
		}
		  
		if (button) {
			button.addEventListener('click', (e) => {
				e.stopPropagation();
				toggle();
			});

			document.addEventListener('click', (e) => {
				let target = e.target;
				let its_textBlock = target == textWindow || textWindow.contains(target);
				let textBlock_is_active = textWindow.classList.contains('info__tooltip-window_active');
				
				if (!its_textBlock && textBlock_is_active) {
					toggle();
				}
			})
		}
	}
	toggleTooltip();

	//Открытие окошка с секретом на странице "О нас"
	function openSecretIngredient() {
		let button = document.querySelector('.info__ingredient');
		let ingredientWindow = document.querySelector('.info__ingredient-wrap_red');

		if (button) {

			button.addEventListener('click', () => {
				ingredientWindow.classList.add('active');
			});
		}
	}
	openSecretIngredient();

	//Формы
	function form() {
		const allForms = document.querySelectorAll('.form-contact');
		
		allForms.forEach(form => {
			const allInputs = form.querySelectorAll('.form__input');

			if (form) {
				//убираем label при фокусе ------------------------------------------------
				allInputs.forEach(input => input.onfocus = function() {
					const id = this.id;
					const label = form.querySelector(`[for=${id}]`);
				
					label.classList.add('form__label_active');
				});
			
				//добавляем label обратно при переключении фокуса, если инпут пустой ----------------
				allInputs.forEach(input => input.addEventListener('focusout', function () {
					if (!this.value) {
						const id = this.id;
						const label = form.querySelector(`[for=${id}]`);
					
						label.classList.remove('form__label_active');
					} 
				}));

			} else return;
		})
	}
	form();

	// Список магазинов на странице "Где купить"
	function toggleListShops() {
		let button = document.querySelector('.window__button');
		let window = document.querySelector('.window__list');

		const toggle = () => {
			button.classList.toggle('window__button_active');
			window.classList.toggle('window__list_active');
		}
		  
		if (button) {
			button.addEventListener('click', (e) => {
				e.stopPropagation();
				toggle();
			});

			document.addEventListener('click', (e) => {
				let target = e.target;
				let its_textBlock = target == window || window.contains(target);
				let textBlock_is_active = window.classList.contains('window__list_active');
				
				if (!its_textBlock && textBlock_is_active) {
					toggle();
				}
			})
		}
	}
	toggleListShops();

	// Активация карты
	let cover = document.querySelector('.shops__not-drug');

	if(cover) {
		cover.addEventListener('click', () => {
			cover.style.display = 'none';
		});
	}

	// Модальное окно обратного звонка
	const modalCall = new HystModal({
		linkAttributeName: "data-modalcall",
		backscroll: false,
		catchFocus: false,
	});

	// Модальное окно результатов поиска
	const modalSearch = new HystModal({
		linkAttributeName: "data-modalSearch",
		backscroll: false,
		catchFocus: false,
	});

	let inputSearch = document.querySelectorAll('.search__input');

	if(inputSearch) {
		inputSearch.forEach(input => input.addEventListener('keyup', (e) => {
			if (e.keyCode === 13) {
				modalSearch.open('#modalSearch')
			}
		}))
	}

	// Модальное окно продукта
	const modalProduct = new HystModal({
		linkAttributeName: "data-modalProduct",
		backscroll: false,
		catchFocus: false,
	});

	// Модальное окно прайса
	const modalPrice = new HystModal({
		linkAttributeName: "data-modalprice",
		backscroll: false,
		catchFocus: false,
	});

	// Модальное окно успешной отправки формы
	const modalSuccessful = new HystModal({
		linkAttributeName: "data-modalSuccessful",
		backscroll: false,
		catchFocus: false,
	});

	// Модальное окно списка магазинов "Белорусские рецепты"
	const modalShops1 = new HystModal({
		linkAttributeName: "data-modalShopsBelR",
		catchFocus: false,
		backscroll: false,
	});

	// const modalBelr = document.getElementById('modalShopsBelR');
	// const listLinksBelr = modalBelr.querySelectorAll('.modal__address-link');

	// listLinksBelr.forEach(link => link.addEventListener('click', function () {
	// 	console.log(modalShops1);
	// 	modalShops1.close();
	// }));

	// Модальное окно списка магазинов "Сыр и масло"
	const modalShops2 = new HystModal({
		linkAttributeName: "data-modalShopsCheese",
		catchFocus: false,
		backscroll: false,
	});

	// Модальное окно списка магазинов "Есть все"
	const modalShops3 = new HystModal({
		linkAttributeName: "data-modalShopsAll",
		catchFocus: false,
		backscroll: false,
	});

	//Слайдер с преимуществами
	const advantagesSlider = new Swiper('.advantages__gallery', {
		slidesPerView: "auto",
		loop: false,
		spaceBetween: 15,
		grabCursor: true,
		allowTouchMove: true,
	
		breakpoints: {
			577: {
				grabCursor: false,
				allowTouchMove: false,
				spaceBetween: 0,
			},
		},

		pagination: {
			el: '.swiper-pagination',
	  	},
	});

	//Слайдер с картой
	const deliverySlider = new Swiper('.delivery__gallery', {
		slidesPerView: "auto",
		loop: false,
		spaceBetween: 0,
		initialSlide: 1,
		grabCursor: true,
		allowTouchMove: true,
	
		navigation: {
			nextEl: '.swiper-button.next',
			prevEl: '.swiper-button.prev',
		},
	});
})