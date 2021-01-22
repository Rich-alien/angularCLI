import {Component, EventEmitter, Output} from '@angular/core';
import {products} from '../../mocks/product.mocks';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})


export class ProductComponent {
  @Output() OnIndexPicked: EventEmitter<Map<number, string>> = new EventEmitter<Map<number, string>>();
  cart = new Map();

  public addToCart(id: number): void {
    this.importToCart(id);
    console.log(this.cart);
    this.OnIndexPicked.emit(this.cart);
  }

  public getProduct(): Product[] {
    return products;
  }


  importToCart = (id: number) => {
    if (!this.cart.has(id)) {
      this.cart.set(id, products[id]);
    } else {
      this.cart.get(id).count++;
    }
  }
}

