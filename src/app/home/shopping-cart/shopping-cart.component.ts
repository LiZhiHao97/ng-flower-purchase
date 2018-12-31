import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { NzModalService } from 'ng-zorro-antd';
import { CookieService } from 'ngx-cookie-service';
import { AddressService } from '../../service/address.service';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';

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
  data = [];
  addressData = [];
  radioValue = '0';

  constructor(
    private modalService: NzModalService,
    private shoppingCartService: ShoppingCartService,
    private cookieService: CookieService,
    private addressService: AddressService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    const uid: string = this.cookieService.get('uid');
    this.shoppingCartService.fetchAll(uid).subscribe(res => {
      const data = [...res['data']];
      data.map(item => item.checked = item.checked ? true : false);
      this.data = data;
      this.calTotalPrice();
    });
  }

  currentPageDataChange($event: Array<{ pid: string;
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
    this.shoppingCartService.changeQuantity(data.id, data.quantity).subscribe(res => {
      this.refreshStatus();
    });
  }

  add(data) {
    if (data.quantity < 99) {
      data.quantity += 1;
    }
    this.shoppingCartService.changeQuantity(data.id, data.quantity).subscribe(res => {
      this.refreshStatus();
    });
  }

  calTotalPrice() {
    const checkData = [...this.displayData].filter(item => item.checked === true);
    let totalPrice = 0;
    if (checkData.length) {
      for (const data of checkData) {
        totalPrice += data.quantity * data.price;
      }
    }
    this.totalPrice = totalPrice;
  }

  settle(addressTpl): void {
    this.addressService.fetchAllByUid(this.cookieService.get('uid')).subscribe(res => {
      this.addressData = res['data'];
      this.modalService.create({
        nzTitle: '选择收货地址',
        nzContent: addressTpl,
        nzClosable: false,
        nzOnOk: () => {
          const selectAddress = this.addressData[this.radioValue];
          const { receiver_province, receiver_city, receiver_district, receiver_address } = selectAddress;
          const address = [receiver_province, receiver_city, receiver_district, receiver_address].join('');
          const uid = this.cookieService.get('uid');
          const username = selectAddress.receiver_name;
          const phone = selectAddress.receiver_phone;
          this.orderService.generateOrder({ uid, username, phone, address }).subscribe(res2 => {
            const subOrdersProduct = this.data.filter(item => item.checked === true);
            const subOrdersData = [];
            for (const subOrder of subOrdersProduct) {
              const subOrderData = {
                oid: res2['oid'],
                pid: subOrder.pid,
                pname: subOrder.pname,
                price: subOrder.price,
                quantity: subOrder.quantity
              };
              subOrdersData.push(subOrderData);
            }
            this.orderService.generateSubOrder(subOrdersData).subscribe(res3 => {
              this.router.navigate(['/home/success']);
            });
          });
        }
      });
    });
  }
}
