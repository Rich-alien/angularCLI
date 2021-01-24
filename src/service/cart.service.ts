import {Injectable} from '@angular/core';
import {products} from '../app/mocks/product.mocks';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new Map();
  cartCount = 0;

  constructor() {
  }

  setCartInstance = (id: number) => {
    if (!this.cart.has(id)) {
      this.cartCount++;
      this.cart.set(id, products[id]);
    } else {
      this.cart.get(id).count++;
    }
  }

  getCartInstance(): Map<string, number> {
    return this.cart;
  }

  incrementCount(index: number): void {
    this.cart.get(index).count++;
    this.cart.get(index).totalPrice += this.cart.get(index).price;
  }

  decrementCount(index: number): void {
    if (this.cart.get(index).count > 1) {
      this.cart.get(index).count--;
      this.cart.get(index).totalPrice -= this.cart.get(index).price;
    }
  }
}
