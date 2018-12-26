import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-center-menu',
  templateUrl: './person-center-menu.component.html',
  styleUrls: ['./person-center-menu.component.scss']
})
export class PersonCenterMenuComponent implements OnInit {
  routers: string[] = ['home/all', 'home/shopping-cart', 'home/orders', 'home/address'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menuClick(index: number) {
    console.log(this.router);
    this.router.navigate([this.routers[index]]);
  }
}
