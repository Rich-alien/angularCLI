import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angularCLI';
  idNumber: number;
  public viewNuber(): void{
    console.log(this.idNumber);
  }
}
