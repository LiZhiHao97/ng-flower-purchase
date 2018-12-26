import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visible = false;

  constructor() { }

  ngOnInit() {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
