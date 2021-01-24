import {Component} from '@angular/core';
import {CartService} from '../../../../service/cart.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {
  constructor(private cartServices: CartService) {
  }
  // // incrementCount(index: number): void {
  // //   this.cart.get(index).count++;
  // //   this.cart.get(index).totalPrice += this.cart.get(index).price;
  // // }
  // //
  // // decrementCount(index: number): void {
  // //   if (this.cart.get(index).count > 1) {
  // //     this.cart.get(index).count--;
  // //     this.cart.get(index).totalPrice -= this.cart.get(index).price;
  // //   }
  // // }
  // incrementCount(index: number): void{
  //   this.cartServices.incrementCount(index - 1) ;
  // }
  // decrementCount(index: number): void{
  //   this.cartServices.decrementCount(index - 1);
  // }
}
