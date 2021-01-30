import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from '../../model/product.model';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {ProductsService} from '../../../service/products.service';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.less'],

})


export class ProductDescriptionComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  public productDescription$: Subject<Product[]> = new ReplaySubject();
  public loader$: Observable<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  products: Observable<Product[]> = this.productsService.getProducts();

  ngOnInit(): void {
    this.loader$ = this.productsService.isLoading();
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.productsService.setCurrentIdProduct(params.productId);
        this.productsService.getProductDescription()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(product => this.productDescription$.next(product));
      });
 }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}

