import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';

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
  sex = '男';

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(): void {
    const { username, password, sex, email } = this;
    this.registerService.register({username, password, sex, email }, this.checkPassword);
  }
}
