import {Component} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {
  showPopup(): void {
    const popup: HTMLElement = document.getElementById('popup');
    console.log(popup);
    popup.style.display = 'block';
  }
}
