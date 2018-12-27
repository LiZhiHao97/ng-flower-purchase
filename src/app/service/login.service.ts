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
export class LoginService {

  constructor(private http: HttpClient,
    private notification: NzNotificationService,
    private router: Router) { }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }

  login(data): void {
    console.log(data);
    this.http.post('/api/user/login', data, httpOptions).subscribe(res => {
      if (res['code'] === 1) {
        this.createNotification('success', res['msg'], '登录成功' );
        this.router.navigate(['/home/all']);
      } else {
        this.createNotification('warning', res['msg'], '请重新输入' );
      }
    });
  }

  logout(): void {
    this.http.get('/api/user/logout').subscribe(res => {
      if (res['code'] === 1) {
        this.createNotification('success', res['msg'], '退出成功' );
      }

    });
  }
}
