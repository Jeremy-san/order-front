import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  orderForm;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.addOrder()
    .subscribe(datas => this.orderForm = datas);
  }

  addOrder() {
    const order = this.orderForm;
    this.data.addOrder();
  }
}
