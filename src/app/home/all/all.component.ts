import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  data: Object[];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productService.fetchAll().subscribe(res => {
      this.data = res['data'];
    });
  }

  gotoDetal(id: string): void {
    this.router.navigate([`/home/all/${id}`]);
  }

}
