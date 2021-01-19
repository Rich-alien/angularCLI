import {Component} from '@angular/core';
import {products} from '../../mocks/product.mocks';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})
// tslint:disable-next-line:class-name
export class productComponent {
  public getProduct() {
    return products;
  }

}
