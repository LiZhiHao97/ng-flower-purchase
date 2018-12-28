import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  quantity = 1;
  data: Object;

  constructor(public activeRoute: ActivatedRoute,
    private productService: ProductService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.productService.fetchOne(params.pid).subscribe(res => {
        this.data = res['data'];
      });
    });
  }

  addToShoppingCart(): void {
    const uid = this.cookieService.get('uid');
    const pid = this.data['id'];
    const pname = this.data['name'];
    const price = this.data['price'];
    const quantity = this.quantity;
    const checked = 1;
    this.productService.addToShoppingCart({ uid, pid, pname, price, quantity, checked });
  }

}
