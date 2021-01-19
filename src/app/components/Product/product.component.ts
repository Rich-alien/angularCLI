import {Component} from '@angular/core';
import {products} from '../../mocks/product.mocks';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})
// tslint:disable-next-line:class-name
export class productComponent {
  public idProduct: number;

  // tslint:disable-next-line:typedef
  public getProduct() {
    return products;
  }

  public setIndex(id: number) {
    this.idProduct = id;
    console.log(this.idProduct);
  }
  public getIndex(){
    return this.idProduct;
  }

}
