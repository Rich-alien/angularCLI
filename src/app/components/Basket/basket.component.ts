import {Component} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {
  showPopup(): void {
    const popup: HTMLElement = document.getElementById('popup');
    popup.classList.add('slowlyOpenPopup');
    const buttonBasket: HTMLElement = document.querySelector('.basketBtn');
    buttonBasket.classList.add('translateBtn');
    const buttonCloseBasket: HTMLElement = document.querySelector('.closeBtn');
    buttonCloseBasket.style.display = 'block';
    setTimeout(() => {
      buttonCloseBasket.classList.add('shroudElement');
    }, 50);

  }

  closePopup(): void {
    console.log('z');
  }
}
