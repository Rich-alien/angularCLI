import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-line',
  templateUrl: './productLine.component.html',
  styleUrls: ['./productLine.component.less']
})
export class ProductLineComponent {
  @Input() data: Map<number, string>;

  // tslint:disable-next-line:typedef
  getCart(){
    if (this.data != undefined){
      this.data.forEach(item => {
        console.log(item);
        return item;
      });

    }
  }
}
