document.addEventListener('DOMContentLoaded', () => {
	
    function toggleSearch() {
		const btn = document.querySelector('#btn-search');
		const panel = document.querySelector('.search__panel');
		const input = document.querySelector('.search__input');
		
		btn.addEventListener('click', () => {
			if (btn) {
                panel.classList.toggle('open');
                input.value = '';
            }
		})
	}
    toggleSearch();

	function toggleBurger() {
		const nav = document.querySelector('.header__mobile');
		const navLinks = document.querySelectorAll('.nav__link');
		const burger = document.querySelector('.burger');
		
		const toggleClasses = () => {
			burger.classList.toggle('burger_open');
			nav.classList.toggle('header__mobile_open');
		}

		burger.addEventListener('click', toggleClasses);
		navLinks.forEach(link => link.addEventListener('click', toggleClasses))
	}

	toggleBurger();

	// Tooltip
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

	const deliverySlider = new Swiper('.delivery__gallery', {
		slidesPerView: "auto",
		loop: false,
		spaceBetween: 0,
		grabCursor: true,
		allowTouchMove: true,
	
		// breakpoints: {
		// 	577: {
		// 		grabCursor: false,
		// 		allowTouchMove: false,
		// 		spaceBetween: 0,
		// 	},
		// },

		// navigation: {
		// 	el: '.swiper-pagination',
	  	// },
	});
})


// document.addEventListener('DOMContentLoaded', () => {

// 	function stickyHeader() {
// 		const header = document.querySelector('.header');
// 		let scrollPrev = 0;

// 		if (window.matchMedia("(min-width: 769px)").matches) {
// 			window.addEventListener('scroll', () => {
// 				let scrolled = window.pageYOffset;

// 				if (scrolled > 153 && scrolled > scrollPrev) {
// 					header.classList.add('header_part-out');
// 				} 

// 				if (scrolled < 153 ) {
// 					header.classList.remove('header_part-out');
// 				} 
	
// 				scrollPrev = scrolled;
// 			})
// 		}
		
// 		if (window.matchMedia("(max-width: 768px)").matches) {
// 			window.addEventListener('scroll', () => {
// 				let scrolled = window.pageYOffset;

// 				if (scrolled > 105 && scrolled > scrollPrev) {
// 					header.classList.remove('header_part-out');
// 					header.classList.add('header_out');
// 				} else {
// 					header.classList.remove('header_out');
// 					header.classList.add('header_part-out');
// 				}

// 				if (scrolled < 105 ) {
// 					header.classList.remove('header_part-out');
// 					header.classList.remove('header_out');
// 				} 
	
// 				scrollPrev = scrolled;
// 			})
// 		}
// 	}

// 	stickyHeader();

// 	const body = document.querySelector('.page');
// 	const cover = document.querySelector('.page__cover');
// 	const modalList = document.querySelectorAll('.modal');
// 	const btnsClose = document.querySelectorAll('.modal__close');

// 	function toggleBurger() {
// 		const nav = document.querySelector('.nav');
// 		const navLinks = document.querySelectorAll('.nav__link');
// 		const burger = document.querySelector('.burger');
		
// 		const toggleClasses = () => {
// 			burger.classList.toggle('burger_open');
// 			nav.classList.toggle('nav_open');
// 			cover.classList.toggle('page__cover_open-menu');
// 			body.classList.toggle('page_active-burger');
// 		}

// 		burger.addEventListener('click', toggleClasses);

// 		cover.addEventListener('click', () => {
// 			if (document.querySelector('.page_active-burger')) toggleClasses();
// 		})

// 		navLinks.forEach(link => link.addEventListener('click', () => {
// 			//проверка на наличие якорной ссылки
// 			const menuActive = body.classList.contains('page_active-burger');
// 			const firstIndex = link.getAttribute('href').indexOf('#') === 0;
			
// 			if (menuActive & firstIndex) toggleClasses();				
// 		}))
// 	}

// 	toggleBurger();

// 	function toggleCart() {
// 		const btnsOpen = document.querySelectorAll('.header__btn_cart');
// 		const btnContinue = document.querySelector('.cart__continue');
// 		const btnOrder = document.querySelector('.cart__order');
// 		const cart = document.querySelector('#cart-modal');
// 		const listProducts = document.querySelectorAll('.cart__content');

// 		const toggleClasses = () => {
// 			modalList[0].classList.toggle('modal_open-cart');
// 			cart.classList.toggle('cart_big_open');
// 			cover.classList.toggle('page__cover_open-cart');
// 			body.classList.toggle('page_active-cart');
// 		}

// 		btnsOpen.forEach(btn => btn.addEventListener('click', toggleClasses));

// 		btnsClose[0].addEventListener('click', () => {
// 			if (document.querySelector('.page_active-cart')) toggleClasses();
// 		})

// 		btnContinue.addEventListener('click', toggleClasses);
// 		btnOrder.addEventListener('click', toggleClasses);

// 		cover.addEventListener('click', () => {
// 			if (document.querySelector('.page_active-cart')) toggleClasses();
// 		})

// 		listProducts.forEach(product => product.addEventListener('click', toggleClasses));
// 	}

// 	toggleCart();

// 	function toggleSearch() {
// 		const searchPanel = document.querySelector('.window');
// 		const links = document.querySelectorAll('.window__item');
// 		const searchBtns = document.querySelectorAll('.header__btn_search');
// 		const closeBtn = document.querySelector('.window__close');
// 		const btn = document.querySelector('.window__button');

// 		const toggleClasses = () => {
// 			searchPanel.classList.toggle('window_open');
// 			cover.classList.toggle('page__cover_open-search');
// 			body.classList.toggle('page_active-search');
// 		}

// 		if (window.location.toString().indexOf('search') < 0) {
// 			searchBtns.forEach(btn => btn.addEventListener('click', toggleClasses));
// 			closeBtn.addEventListener('click', toggleClasses);
// 			btn.addEventListener('click', toggleClasses);
// 			cover.addEventListener('click', () => {
// 				if (document.querySelector('.page_active-search')) toggleClasses();
// 			})
// 			links.forEach(link => link.addEventListener('click', toggleClasses));
// 		} else {
// 			return;
// 		}
// 	}

// 	toggleSearch();

// 	function toggleForm() {
// 		const btnOpen = document.querySelector('.feedbacks__btn');
// 		const btnSend = document.querySelector('.feedback__button');
// 		const form = document.querySelector('#feedback-modal');

// 		const toggleClasses = () => {
// 			modalList[1].classList.toggle('modal_open-form');
// 			form.classList.toggle('feedback_open');
// 			cover.classList.toggle('page__cover_open-form');
// 			body.classList.toggle('page_active-form');
// 		}

// 		if(btnOpen) btnOpen.addEventListener('click', toggleClasses);

// 		btnsClose[1].addEventListener('click', () => {
// 			if (document.querySelector('.page_active-form')) toggleClasses();
// 		})

// 		if(btnSend) btnSend.addEventListener('click', toggleClasses);

// 		cover.addEventListener('click', () => {
// 			if (document.querySelector('.page_active-form')) toggleClasses();
// 		})
// 	}

// 	toggleForm();

// 	function toggleSuccessfulModal() {
// 		const btnOpen = document.querySelector('.successful__btn');
// 		const btnReady = document.querySelector('.successful-3__button');
// 		const successful = document.querySelector('#successful-modal');

// 		const toggleClasses = () => {
// 			modalList[2].classList.toggle('modal_open-successful');
// 			successful.classList.toggle('successful-3_open');
// 			cover.classList.toggle('page__cover_open-successful');
// 			body.classList.toggle('page_active-successful');
// 		}

// 		if(btnOpen) btnOpen.addEventListener('click', toggleClasses);

// 		btnsClose[2].addEventListener('click', () => {
// 			if (document.querySelector('.page_active-successful')) toggleClasses();
// 		})

// 		if(btnReady) btnReady.addEventListener('click', toggleClasses);

// 		cover.addEventListener('click', () => {
// 			if (document.querySelector('.page_active-successful')) toggleClasses();
// 		})
// 	}

// 	toggleSuccessfulModal();

// 	function checkboxColor() {
// 		const checkboxList = document.querySelectorAll('.device__input');
		
// 		checkboxList.forEach(checkbox => checkbox.addEventListener('click', () => {		
// 			checkboxList.forEach(checkbox => checkbox.checked = false);
// 			checkbox.checked = true;
// 		}))
// 	}

// 	checkboxColor();

// 	function countProducts() {
// 		const btnsPlus = document.querySelectorAll('.cart__plus');
// 		const btnsMinus = document.querySelectorAll('.cart__minus');

// 		btnsPlus.forEach(btn => btn.addEventListener("click", () => {
// 			let input = btn.closest('.cart__amount').querySelector('.cart__input');

// 			if(input.value >= 99) return;
// 			input.value = Number(input.value) + 1;
// 		}))

// 		btnsMinus.forEach(btn => btn.addEventListener("click", () => {
// 			let input = btn.closest('.cart__amount').querySelector('.cart__input');

// 			if(input.value <= 1) return;
// 			input.value = Number(input.value) - 1;
// 		}))
// 	}

// 	countProducts();

// 	function toggleImgModal() {
// 		const listImages1 = document.querySelectorAll('.feedbacks__img');
// 		const listImages2 = document.querySelectorAll('.img-big');
// 		const imgWrap = document.querySelector('#img-modal');
// 		const tegImg = document.querySelector('.image__photo');
		
// 		const toggleClasses = () => {
// 			modalList[3].classList.toggle('modal_open-image');
// 			imgWrap.classList.toggle('image_open');
// 			cover.classList.toggle('page__cover_open-image');
// 			body.classList.toggle('page_active-image');
// 		}

// 		const getSrc = (e) => {
// 			let src = e.target.src;
// 			tegImg.src = src;
// 			toggleClasses();
// 		} 

// 		listImages1.forEach(img => img.addEventListener("click", getSrc));
// 		listImages2.forEach(img => img.addEventListener("click", getSrc));

// 		btnsClose[3].addEventListener('click', () => {
// 			if (document.querySelector('.page_active-image')) toggleClasses();
// 		})

// 		cover.addEventListener('click', () => {
// 			if (document.querySelector('.page_active-image')) toggleClasses();
// 		})
// 	}

// 	toggleImgModal();

// 	// Формы
// 	function form() {
// 		const modalForm = document.querySelector('#feedback-modal');

// 		if (window.location.toString().indexOf('contacts') > 0 || window.location.toString().indexOf('order') > 0 || modalForm) {

// 			const form = document.querySelector('.form-id');
// 			const allInputs = form.querySelectorAll('.form__input');

// 			//смещение label вверх при фокусе ------------------------------------------------
// 			allInputs.forEach(input => input.onfocus = function() {
// 				const id = this.id;
// 				const label = form.querySelector(`[for=${id}]`);
		
// 				label.classList.add('form__label_active');
// 			});
		
// 			//смещение label обратно при переключении фокуса, если инпут пустой ----------------
// 			allInputs.forEach(input => input.addEventListener('focusout', function () {
// 				if (!this.value) {
// 					const id = this.id;
// 					const label = form.querySelector(`[for=${id}]`);
		
// 					label.classList.remove('form__label_active');
// 				} 
// 			}));

// 			//обработка input[type= file] ------------------------------------------------------
// 			const inputImage = document.querySelector('#forfile');
// 			const preview = document.querySelector('#output');
						
// 			inputImage.addEventListener('change', () => {
// 				uploadFile(inputImage.files[0]);
// 				preview.addEventListener('DOMSubtreeModified', deletePhoto);
// 			});

// 			function uploadFile (file) {
// 				//проверка типа
// 				if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
// 					inputImage.value = '';
// 					return;
// 				}

// 				//проверка размера (до 1мб)
// 				if (file.size > 1024 * 1024) return;

// 				//полученние и вставка изображения
// 				let reader = new FileReader();
// 				reader.onload = function(e) {
// 					preview.innerHTML = `
// 					<div class="form__img-wrap">
// 						<img src="${e.target.result}" alt="photo" class="form__img">
// 					</div>
// 					<button type="button" class="form__delete">
// 						<svg viewBox="0 0 16 16" class="form__icon">
// 							<path d="M13.25 2H10.5V1.5C10.5 0.671562 9.82844 0 9 0H7C6.17156 0 5.5 0.671562 5.5 1.5V2H2.75C2.05966 2 1.5 2.55966 1.5 3.25V4.25C1.5 4.52616 1.72384 4.75 2 4.75H14C14.2762 4.75 14.5 4.52616 14.5 4.25V3.25C14.5 2.55966 13.9403 2 13.25 2ZM6.5 1.5C6.5 1.22438 6.72437 1 7 1H9C9.27563 1 9.5 1.22438 9.5 1.5V2H6.5V1.5Z"/>
// 							<path d="M2.44921 5.75C2.35999 5.75 2.2889 5.82456 2.29315 5.91369L2.70565 14.5712C2.74377 15.3725 3.4019 16 4.20377 16H11.7969C12.5988 16 13.2569 15.3725 13.295 14.5712L13.7075 5.91369C13.7118 5.82456 13.6407 5.75 13.5515 5.75H2.44921ZM10.0003 7C10.0003 6.72375 10.2241 6.5 10.5003 6.5C10.7766 6.5 11.0003 6.72375 11.0003 7V13.5C11.0003 13.7762 10.7766 14 10.5003 14C10.2241 14 10.0003 13.7762 10.0003 13.5V7ZM7.50034 7C7.50034 6.72375 7.72409 6.5 8.00034 6.5C8.27659 6.5 8.50034 6.72375 8.50034 7V13.5C8.50034 13.7762 8.27659 14 8.00034 14C7.72409 14 7.50034 13.7762 7.50034 13.5V7ZM5.00034 7C5.00034 6.72375 5.22409 6.5 5.50034 6.5C5.77659 6.5 6.00034 6.72375 6.00034 7V13.5C6.00034 13.7762 5.77659 14 5.50034 14C5.22409 14 5.00034 13.7762 5.00034 13.5V7Z"/>
// 						</svg>
// 					</button>
// 					`;
// 				}
// 				reader.readAsDataURL(file);
// 			}

// 			//удаление изображения
// 			function deletePhoto() {
// 				const btnDelete = document.querySelector('.form__delete');

// 				if(btnDelete) {
// 					btnDelete.addEventListener('click', () => {
// 						preview.innerHTML = '';
// 						inputImage.value = '';
// 					})
// 				}
// 			}
// 		}
// 	}

// 	form();

// 	// Слайдеры
// 	const mainSlider = new Swiper('.slider', {
// 		loop: true,
// 		grabCursor: false,
	
// 		breakpoints: {
// 			320: {
// 				allowTouchMove: true,
// 			},
// 			768: {
// 				allowTouchMove: false,
// 			}
// 		},
	
// 		autoplay: {
// 			delay: 3000,
// 		},
	
// 		pagination: {
// 			  el: '.swiper-pagination',
// 		},
	
// 		navigation: {
// 			  nextEl: '.swiper-button-next',
// 			  prevEl: '.swiper-button-prev',
// 		},
// 	});
	
// 	const galleryInstagram = new Swiper('.instagram__gallery', {
// 		slidesPerView: "auto",
// 		freeMode: true,
// 		spaceBetween: 20,
	
// 		breakpoints: {
// 			320: {
// 				grabCursor: true,
// 				allowTouchMove: true,
// 			},
// 			1340: {
// 				grabCursor: false,
// 				allowTouchMove: false,
// 			}
// 		},
// 	});
	
// 	const galleryThumbs = new Swiper(".device__thumbs", {
// 		slidesPerView: 4,
// 		freeMode: true,
// 		watchSlidesProgress: true,
// 		grabCursor: true,
	
// 		breakpoints: {
// 			0: {
// 				direction: "vertical",
// 				spaceBetween: 10,
// 			},
// 			769: {
// 				direction: "horizontal",
// 				spaceBetween: 22,
// 			}
// 		},
// 	});
// 	const galleryTop = new Swiper(".device__preview", {
// 		grabCursor: true,
// 		zoom: {
// 			maxRatio: 2,
// 			minRatio: 1
// 		},
// 		thumbs: {
// 			swiper: galleryThumbs,
// 		},
// 	});
	
// 	const galleryFeedback = new Swiper('.feedbacks__gallery', {
// 		slidesPerView: "auto",
// 		loop: false,
// 		spaceBetween: 18,
// 		grabCursor: true,
// 		allowTouchMove: true,
	
// 		navigation: {
// 			nextEl: '.feedbacks__button-next',
// 			prevEl: '.feedbacks__button-pev',
// 		  },
// 	});
// })