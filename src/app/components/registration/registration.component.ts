import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],

})


export class RegistrationComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {
    //
  }
  reg(): void{
    localStorage.setItem('loggedIn', String(true));
  }
}

