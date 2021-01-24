import {Component, Input} from '@angular/core';
import {CartService} from '../../../../service/cart.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {
  @Input() count: number;
  @Input() id: number;

  constructor(private cartServices: CartService) {
  }

  incrementCount(id: number): void {
    this.cartServices.cart.forEach(item => {
      if (item.id === id) {
        item.count++;
        item.totalPrice = item.price * item.count;
      }
    });
  }

  decrementCount(id: number): void {
    this.cartServices.cart.forEach(item => {
      if (item.id === id && item.count > 1) {
        item.count--;
        item.totalPrice = item.price * item.count;
      }
    });
  }
}
