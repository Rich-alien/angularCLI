import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {products} from '../../mocks/product.mocks';
import {CartService} from '../../../service/cart.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],

})
export class PopupComponent  {

}
