import {Component} from '@angular/core';
import {CartService} from '../../../service/cart.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-line',
  templateUrl: './productLine.component.html',
  styleUrls: ['./productLine.component.less']
})
export class ProductLineComponent {
  constructor(private cartServices: CartService) {
  }

  cartData: IterableIterator<Product[]>;

  public getData(): Product[] {
    return this.cartServices.getCartInstance();
  }
}
