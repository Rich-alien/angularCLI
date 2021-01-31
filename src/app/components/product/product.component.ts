import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../service/products.service';
import {Product} from '../../model/product.model';
import {CartService} from '../../../service/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})


export class ProductComponent implements OnInit {

  productList: Product[];
  constructor(private productService: ProductsService, private cartServices: CartService) {
  }

  public addToCart(id: number): void {
    this.cartServices.setCartInstance(id);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }

}

