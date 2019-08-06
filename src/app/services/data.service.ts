import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderFormComponent } from '../components/order-form/order-form.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost/3000';
  orderForm: Array<OrderFormComponent> = [];

  constructor(private http: HttpClient) { }

  addOrder(): Observable<any> {
    return this.http.get<any>(`${this.url}/order`);
  }
}
