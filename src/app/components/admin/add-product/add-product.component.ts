import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less'],

})


export class AddProductComponent implements OnInit {
  public product = {
    name: '',
    price: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}

