import {Injectable} from '@angular/core';
import {products} from '../app/mocks/product.mocks';
import {Product} from '../app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  cartCount = 0;

  constructor() {
  }

  setCartInstance = (id: number) => {
    if (this.cartCount === 0) {
      this.cartCount++;
      this.cart.push(products[id]);
    } else {
      if (this.hasCollision(id)) {
        this.cartCount++;
        this.cart.push(products[id]);
      } else {
        this.cart.forEach(item => {
          if (item.id === id) {
            item.count++;
          }
        });
      }
    }
  }
  hasCollision(id: number): boolean {
    let HasId = true;
    this.cart.forEach(item => {
      if (item.id === id) {
        HasId = false;
      }
    });
    return HasId;
  }

  getCartInstance(): Product[] {
    return this.cart;
  }

}
