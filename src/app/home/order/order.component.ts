import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  totalPrice: number;
  totalCount: number;
  dataSet = [
    {
      pid: '1',
      name: '狗篮子花',
      price: 299,
      quantity: 3
    },
    {
      pid: '2',
      name: '水仙花',
      price: 188,
      quantity: 4,
    }
  ];

  constructor() { }

  ngOnInit() {
    this.totalPrice = 0;
    this.totalCount = 0;
    for (const item of this.dataSet) {
      this.totalPrice += item.quantity * item.price;
      this.totalCount += item.quantity;
    }
  }

}
