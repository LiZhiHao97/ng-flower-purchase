import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    private notification: NzNotificationService) { }

  fetchAll() {
    return this.http.get('/api/product');
  }

  fetchOne(pid: string) {
    return this.http.get(`/api/product/id/${pid}`);
  }

  addToShoppingCart(data) {
    if (!data.quantity || data.quantity < 1) {
      this.createNotification('warning', '添加失败', '数量不得小于1');
      return;
    }
    this.http.post('/api/shopping-cart/create', data, httpOptions).subscribe(res => {
      if (res['code'] === 1) {
        this.createNotification('success', res['msg'], '您可以在购物车中查看该商品');
      } else {
        this.createNotification('warning', res['msg'], '请去购物车查看');
      }
    });
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
