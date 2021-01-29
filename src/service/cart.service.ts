import {Injectable} from '@angular/core';
import {Product} from '../app/model/product.model';
import {ProductsService} from './products.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  cartCount = 0;
  products: Observable<Product[]> = this.productService.getProducts();
  constructor(private productService: ProductsService) {
  }
  setCartInstance = (id: number) => {
    if (this.cartCount === 0) {
      this.cartCount++;
      this.cart.push(this.products[id]);
    } else {
      if (this.hasCollision(id)) {
        this.cartCount++;
        this.cart.push(this.products[id]);
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
