import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../service/products.service';
import {Product} from '../../model/product.model';
import {CartService} from '../../../service/cart.service';

// [routerLink]="['/products', category]"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})


export class ProductComponent implements OnInit {
  cart = new Map();
  productList: Product[];

  constructor(private productService: ProductsService, private cartServices: CartService) {
  }

  public addToCart(id: number): void {
    this.cartServices.setCartInstance(id);
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
}

