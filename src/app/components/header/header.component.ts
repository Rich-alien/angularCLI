import {Component, Input} from '@angular/core';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],

})
export class HeaderComponent  {
  @Input() authorization;
  constructor(private userService: UserService) {
  }
  chekStatus(): boolean {
      let wasPressedReg = false;
      if (this.userService.getUserStatus() === 'true') {
        wasPressedReg = true;
      }
      return wasPressedReg;
  }
}
