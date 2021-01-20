import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angularCLI';
  @Input() indexProduct: number;
  index: number;
  public getIndex(date: number): void {
    this.index = date;
  }

}
