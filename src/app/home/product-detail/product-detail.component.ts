import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  quantity = 1;
  data: Object;

  constructor(public activeRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.productService.fetchOne(params.pid).subscribe(res => {
        this.data = res['data'];
      });
    });
  }

}
