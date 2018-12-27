import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get('/api/product');
  }

  fetchOne(pid: string) {
    return this.http.get(`/api/product/id/${pid}`);
  }
}
