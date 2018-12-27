import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,
    private notification: NzNotificationService,
    private router: Router) { }

  register(data, checkPassword): void {
    const reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
    if (!data.username) {
      this.createNotification('warning', '用户名不得为空', '请重新输入');
      return;
    }
    if (!data.password) {
      this.createNotification('warning', '密码不得为空', '请重新输入');
      return;
    }
    if (data.password !== checkPassword) {
      this.createNotification('warning', '两次密码不相同', '请重新输入');
      return;
    }
    if (!reg.test(data.email)) {
      this.createNotification('warning', '邮箱格式不正确', '请重新输入');
      return;
    }
    this.http.post('/api/user/register', data, httpOptions).subscribe(res => {
      if (res['code'] === 1) {
        this.createNotification('success', res['msg'], '您现在可以登录了' );
        this.router.navigate(['/login']);
      } else {
        this.createNotification('warning', res['msg'], '请重新输入' );
      }
    });
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
