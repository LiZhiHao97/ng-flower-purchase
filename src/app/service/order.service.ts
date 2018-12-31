import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  fetchAllOrderByUid(uid: string) {
    return this.http.get(`/api/order/${uid}`);
  }

  fetchAllSubOrderByOide(oid: string) {
    return this.http.get(`/api/sub-order/${oid}`);
  }

  generateOrder(data) {
    return this.http.post(`/api/order/create`, data, httpOptions);
  }

  generateSubOrder(data) {
    return this.http.post(`/api/sub-order/create`, data, httpOptions);
  }
}
