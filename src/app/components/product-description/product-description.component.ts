import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product.model';
import {products} from '../../mocks/product.mocks';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.less'],

})


export class ProductDescriptionComponent implements OnInit {
  id: number;
  product: Product;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.productId;
    });
    this.product = products[this.id];
  }
}

