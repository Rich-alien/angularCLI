import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.model';
import {products} from '../../mocks/product.mocks';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],

})
export class PopupComponent {
  @Input() index: number;
  cart = [];
  public getCart(): Product[] {
    let product = products.filter(item => item.id === this.index);
    this.cart.push(product);
    console.log(product);
    return ;
  }
}
