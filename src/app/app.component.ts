import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angularCLI';
  @Input() indexProduct: number;
  data: Map<number, string>;
  public getIndex(date: Map<number, string>): void {
    this.data = date;
  }

}
