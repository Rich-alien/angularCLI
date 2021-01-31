import {Injectable} from '@angular/core';
import {Product} from '../app/model/product.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  // метод по получения продуктов с api
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

}
