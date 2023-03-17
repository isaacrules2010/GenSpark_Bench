import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders!:Order[];

  constructor(private orderService:OrderService) { }

  ngOnInit():void {
    this.retrieveOrders()
  }

  retrieveOrders():void{
    this.orderService.getOrders()
    .subscribe({
      next: (data) => {
        this.orders=data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  createOrder():void{
    const data = this.orderService.addOrder()
    .subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    console.log(data);
  }

  cancelOrder = async(id:number) => {
    const data = await this.orderService.deleteOrder(id);
    console.log(data);
  }
}
