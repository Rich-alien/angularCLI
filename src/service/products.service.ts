import {Injectable} from '@angular/core';
import {Product} from '../app/model/product.model';
import {products} from '../app/mocks/product.mocks';

@Injectable({
  // будет подключен сразу к корневому, тут можно указать опр. компоненту
   providedIn: 'root'
})
export class ProductsService {
  constructor() {
  }
  getProducts(): Product[] {
    return products;
  }
}
