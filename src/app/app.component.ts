import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angularCLI';
  @Input() indexProduct: number;
  public doSomething(date: number): void {
    console.log('Picked date: ', date);
  }

}
