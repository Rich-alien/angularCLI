import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from '../../model/product.model';
import {products} from '../../mocks/product.mocks';


@Component({
  selector: 'app-product-description',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.less'],

})


export class ProductDescriptionComponent implements OnInit{
  id: number;
  product: Product;
  name: Params;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.name = params.productId;
      console.log(this.name);
    });
     // this.product = products[this.id];
  }
}

