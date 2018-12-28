import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  dataSet = [
    {
      pid: '1',
      name: '狗篮子花',
      price: 299,
      quantity: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
