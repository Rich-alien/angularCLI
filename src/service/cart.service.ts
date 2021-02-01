import {Injectable} from '@angular/core';
import {Product} from '../app/model/product.model';
import {ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  cartCount = 0;
  productForCart: Product;

  constructor(private productService: ProductsService) {
  }

  setCartInstance = (id: number) => {
    if (this.cartCount === 0) {
      this.cartCount++;
      this.addProductToCart(id);
    } else {
      if (this.hasCollision(id)) {
        this.cartCount++;
        this.addProductToCart(id);
      } else {
        this.cart.forEach(item => {
          if (item.id === id) {
            item.count++;
          }
        });
      }
    }
  }

  addProductToCart(id: number): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.cart.push(products[id]);
    });
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
