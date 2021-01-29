import {Injectable} from '@angular/core';
import {Product} from '../app/model/product.model';
import {BehaviorSubject, combineLatest, Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay, map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private loading$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  private selectedID$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProductsWithoutEmpty(): Observable<Product[]> {
    this.loading$.next(true);
    return combineLatest([this.getProducts()])
      .pipe(
        delay(1000),
        take(1),
        map(([products]: [Product[]]) =>
          // добавлен фильтр, что если продукта нет , то он не будет появляться.
          products.filter(p => p.count > 0)),
        tap(() => this.loading$.next(false))
      );
  }

  getProductDescription(): Observable<Product[]> {
    this.loading$.next(true);
    return combineLatest([this.getProducts(), this.selectedID$])
      .pipe(
        delay(1000),
        take(1),
        map(([products, id]: [Product[], number]) =>
          products.filter(p => p.id === id)),
        tap(() => this.loading$.next(false))
      );

  }

  // getCurrentIdProduct(): Observable<number> {
  //   return this.selectedID$;
  // }

  setCurrentIdProduct(value: number): void {
    this.selectedID$.next(value);
  }
}
