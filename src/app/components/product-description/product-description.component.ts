import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product.model';
import { Subject, Subscription} from 'rxjs';
import {ProductsService} from '../../../service/products.service';



@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.less'],

})


export class ProductDescriptionComponent implements OnInit, OnDestroy {
  id: number;
  private unsubscribe$: Subject<void> = new Subject();
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  productDescription: Product;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.productId;
      this.productsService.getProducts().subscribe((products: Product[]) => {
        this.productDescription = products[this.id];
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}

