import {Component} from '@angular/core';
import {CartService} from '../../../service/cart.service';

@Component({
  selector: 'app-product-line',
  templateUrl: './productLine.component.html',
  styleUrls: ['./productLine.component.less']
})
export class ProductLineComponent {
  constructor(private cartServices: CartService) {
  }

  cartData: IterableIterator<number>;

  getData(): number[] {
    this.cartData = this.cartServices.getCartInstance().values();
    return [...this.cartData];
  }
}
