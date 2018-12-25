import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-wrapper',
  templateUrl: './register-wrapper.component.html',
  styleUrls: ['./register-wrapper.component.scss']
})
export class RegisterWrapperComponent implements OnInit {
  username: string;
  password: string;
  checkPassword: string;
  email: string;
  radioValue = '男';

  constructor() { }

  ngOnInit() {
  }

}
