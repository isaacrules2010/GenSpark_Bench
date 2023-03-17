import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/order';
import { Item } from '../model/item';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http:HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(baseUrl+'orders');
  }

  // getOrderById(id:number):Observable<Object>{
  //   return this.http.get<Order>(baseUrl+'orders/'+id);
  // }

  // public getItems():Observable<any>{
  //   return this.http.get<Item[]>(`${baseUrl}`+'items');
  // }

  public addOrder():Observable<any>{
    let user:string = 'user';
    return this.http.post<Order>(baseUrl+'orders', {})
  }

  public deleteOrder(id:number):Observable<any>{
    return this.http.delete(baseUrl+'orders/'+id);
  }

//   public addItem(objectid:number, itemid:number):Observable<Object>{
//     return this.http.put(`${baseUrl}`+'orders/'+objectid+'/add/'+itemid,{})
//   }

//   public removeItem(objectid:number, itemid:number):Observable<any>{
//     return this.http.put(`${baseUrl}`+'orders/'+objectid+'/remove/'+itemid,{})
//   }

//   public addMessage(order:Order):Observable<Object>{
//     let message = order.giftMessage;
//     console.log("SERVICE: " + message);
//     return this.http.put(`${baseUrl}`+'orders/'+order.id+'/gift', {message});
//   }
}
