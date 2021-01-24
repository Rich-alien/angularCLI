import {Injectable} from '@angular/core';
import {products} from '../app/mocks/product.mocks';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart  = new Map();
  cartCount = 0;
  constructor() {
  }
  setCartInstance(index: number): void{
    this.importToCart(index);
  }
   importToCart = (id: number) => {
    if (!this.cart.has(id)) {
      this.cartCount++;
      this.cart.set(id, products[id]);
    } else {
      this.cart.get(id).count++;
    }
  }
  getCartInstance(): Map<string, number>{
    return this.cart;
  }
}
