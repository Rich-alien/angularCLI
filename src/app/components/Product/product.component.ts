import {Component, Input} from '@angular/core';
import {products} from '../../mocks/product.mocks';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})

// tslint:disable-next-line:class-name
export class productComponent {
  @Input()  idProduct: number;

  public getProduct(): Product[] {
    return products;
  }

  public addToCart(id: number): void {
    this.idProduct = id;
    console.log(this.idProduct);
  }

  public getID(): number {
    return this.idProduct;
  }
}

