import {Component, EventEmitter, Output} from '@angular/core';
import {products} from '../../mocks/product.mocks';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],

})


export class ProductComponent {
  @Output() OnIndexPicked: EventEmitter<number> = new EventEmitter<number>();
    public pickIndex(date: number): void {
    this.OnIndexPicked.emit(date);
  }
  public getProduct(): Product[] {
    return products;
  }
}

