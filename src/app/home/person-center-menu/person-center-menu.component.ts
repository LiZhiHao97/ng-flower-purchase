import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-person-center-menu',
  templateUrl: './person-center-menu.component.html',
  styleUrls: ['./person-center-menu.component.scss']
})
export class PersonCenterMenuComponent implements OnInit {
  routers: string[] = ['home/all', 'home/shopping-cart', 'home/orders', 'home/address'];
  @Output()
  public visibleChange = new EventEmitter();

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  menuClick(index: number): void {
    this.router.navigate([this.routers[index]]);
  }

  logout(): void {
    this.loginService.logout();
    this.visibleChange.emit('visibleChange');
  }
}
