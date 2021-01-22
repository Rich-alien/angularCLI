import {Component, Input, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {products} from '../../mocks/product.mocks';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],

})
export class PopupComponent {
  @Input() data: Map<number, string>;
}