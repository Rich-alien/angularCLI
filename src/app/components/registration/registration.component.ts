import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],

})

export class RegistrationComponent implements OnInit{
  @Output() wasRegistration: EventEmitter<boolean> = new EventEmitter<boolean>();
  public updateStatus(status: boolean): void {
    this.wasRegistration.emit(status);
  }
  ngOnInit(): void {
  }
}

