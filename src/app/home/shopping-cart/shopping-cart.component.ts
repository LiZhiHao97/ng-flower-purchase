import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  allChecked = false;
  indeterminate = false;
  displayData = [];
  totalPrice: number;
  data = [
    {
      pid: 1,
      name: '百合花',
      price: 299,
      quantity: 1,
      create_time: '2018-12-26',
      checked: false
    },
    {
      pid: 1,
      name: '菊花',
      price: 188,
      quantity: 1,
      create_time: '2018-12-26',
      checked: false
    },
    {
      pid: 1,
      name: '水仙花',
      price: 199,
      quantity: 1,
      create_time: '2018-12-26',
      checked: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  currentPageDataChange($event: Array<{ pid: number;
    name: string; price: number; quantity: number; create_time: string; checked: boolean; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.calTotalPrice();
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  reduce(data) {
    if (data.quantity > 1) {
      data.quantity -= 1;
    }
    this.refreshStatus();
  }

  add(data) {
    if (data.quantity < 99) {
      data.quantity += 1;
    }
    this.refreshStatus();
  }

  calTotalPrice() {
    const checkData = [...this.displayData].filter(item => item.checked === true);
    console.log(checkData);

    if (checkData.length) {
      let totalPrice = 0;
      for (const data of checkData) {
        totalPrice += data.quantity * data.price;
      }
      this.totalPrice = totalPrice;
    }
  }

}
