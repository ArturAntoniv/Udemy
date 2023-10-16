'use strict';
 
window.addEventListener('DOMContentLoaded', () =>{

	class menuCard {
		constructor(src, alt, title, descr, prise, parentSelector, ...classes){
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.prise = prise;

			this.classes = classes; // Добавляю класи //! Це масив

			this.parent = document.querySelector(parentSelector);

			this.transfer = 27;
			this.changeToUAH(); //! Викликаю обмінник
		}
		changeToUAH(){
			this.prise =this.prise * this.transfer; //! Данні приходять в доларах і роблю обмін в ГРН
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}
			
			element.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Ціна:</div>
					<div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
				</div>
			`;
			this.parent.append(element);
		}
	}
	new menuCard(
		"img/tabs/vegy.jpg",
		'vegy',
		"Цей блок зроблено ПОВНІСТЮ на LS! <br><br> Меню 'Фітнес'",
		"Меню 'Фітнес' - це новий підхід до приготування страв: більше свіжих овочів і фруктів. Продукт активних і здорових людей. Це абсолютно новий продукт з оптимальною ціною та високою якістю!",
		9,
		'.menu .container',
	).render();
	
});