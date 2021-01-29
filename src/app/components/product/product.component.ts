import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../../service/products.service';
import {Product} from '../../model/product.model';
import {CartService} from '../../../service/cart.service';
import {ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

// [routerLink]="['/products', category]"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})


export class ProductComponent implements OnInit, OnDestroy {
  cart = new Map();
  // productList: Product[];
  public productList$: Subject<Product[]> = new ReplaySubject();
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private productService: ProductsService, private cartServices: CartService, private route: ActivatedRoute) {
  }

  public addToCart(id: number): void {
    this.cartServices.setCartInstance(id);
  }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((products: Product[]) => {
  //     this.productList = products;
  //   });
  // }
  ngOnInit(): void {
    // this.loader$ = this.productService.isLoading();
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.productService.getProductsWithoutEmpty()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(products => this.productList$.next(products));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}

