import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders = [];
  constructor(private orderService: OrderService,
    private cookieService: CookieService) {
  }

  ngOnInit() {
    this.orderService.fetchAllOrderByUid(this.cookieService.get('uid')).subscribe(res => {
      this.orders = res['data'];
    });
  }

}
