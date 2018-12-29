import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  totalPrice: number;
  totalCount: number;
  @Input()
  data: Object;
  dataSet = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.fetchAllSubOrderByOide(this.data['id']).subscribe(res => {
      this.dataSet = res['data'];
      this.totalPrice = 0;
      this.totalCount = 0;
      for (const item of this.dataSet) {
        this.totalPrice += item.quantity * item.price;
        this.totalCount += item.quantity;
      }
    });
  }

}
