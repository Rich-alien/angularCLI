import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],

})
export class HeaderComponent  {
  @Input() authorization;
  public getUserStatus(status: boolean): void{
    localStorage.setItem('loggedIn', status.toString());
    this.authorization = status;
  }
}
