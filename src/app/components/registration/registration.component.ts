import {Component} from '@angular/core';
import {UserService} from '../../../service/user.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],

})

export class RegistrationComponent{
  constructor(private userService: UserService) {
  }
  public updateStatus(status: string): void {
    this.userService.setUserStatus(status);
    }
}

