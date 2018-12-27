import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visible = false;
  username: string;
  avatarUrl: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.username = this.cookieService.get('username');
    this.avatarUrl = `../../assets/imgs/${this.cookieService.get('avatar')}.png`;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  logout() {
    this.visible = false;
    this.username = null;
    this.avatarUrl = null;
  }

}
