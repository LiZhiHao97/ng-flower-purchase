import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.scss']
})
export class LoginWrapperComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
