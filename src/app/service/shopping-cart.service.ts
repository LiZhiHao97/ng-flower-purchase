import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  fetchAll(id: string) {
    return this.http.get(`/api/shopping-cart/${id}`);
  }

  changeQuantity(id: string, quantity: number) {
    console.log(1);
    return this.http.put(`/api/shopping-cart/${id}/${quantity}`, httpOptions);
  }
}
