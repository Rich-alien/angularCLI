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
    setInterval(() => {
      buttonCloseBasket.style.display = 'block';
    }, 1000);
    setInterval(() => {
      buttonCloseBasket.classList.add('shroudElement');
    }, 1020);

  }

  closePopup(): void {
    console.log('fuck u');
  }
}
