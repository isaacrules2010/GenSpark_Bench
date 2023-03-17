import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { OrderDisplayComponent } from './modules/order-display/order-display.component';
import { OrderListComponent } from './modules/order-list/order-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'orders', component:OrderListComponent },
  { path: 'orders/:id', component:OrderDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
