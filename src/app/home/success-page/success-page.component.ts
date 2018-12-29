import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoShoppingCart(): void {
    this.router.navigate(['home/shopping-cart']);
  }

  gotoOrders(): void {
    this.router.navigate(['home/orders']);
  }

  gotoAll(): void {
    this.router.navigate(['home/all']);
  }
}
