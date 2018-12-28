import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { NzModalService } from 'ng-zorro-antd';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient,
    private notification: NzNotificationService,
    private modalService: NzModalService) { }

  addAddress(data) {
    if (!this.check(data)) {
      return;
    }
    return this.http.post('/api/address/add', data, httpOptions);
  }

  update(data) {
    if (!this.check(data)) {
      return;
    }
    return this.http.put(`/api/address/${data['id']}`, data, httpOptions);
  }

  delete(id: string) {
    return this.http.delete(`/api/address/${id}`);
  }

  fetchById(uid: string) {
    return this.http.get(`/api/address/${uid}`);
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }

  check(data): Boolean {
    if (!data['receiver_name']) {
      this.createNotification('warning', '收货人不得为空', '请重新输入');
      return false;
    }
    if (!data['receiver_phone']) {
      this.createNotification('warning', '手机号不得为空', '请重新输入');
      return false;
    }
    if (!data['receiver_province']) {
      this.createNotification('warning', '所在省份不得为空', '请重新输入');
      return false;
    }
    if (!data['receiver_city']) {
      this.createNotification('warning', '所在城市不得为空', '请重新输入');
      return false;
    }
    if (!data['receiver_district']) {
      this.createNotification('warning', '所在区域不得为空', '请重新输入');
      return false;
    }
    if (!data['receiver_address']) {
      this.createNotification('warning', '详细地址不得为空', '请重新输入');
      return;
    }
    if (!data['receiver_zip']) {
      this.createNotification('warning', '收货人不得为空', '请重新输入');
      return false;
    }
    return true;
  }
}
