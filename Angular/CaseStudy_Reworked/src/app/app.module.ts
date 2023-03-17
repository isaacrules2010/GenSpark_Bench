import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { OrderDisplayComponent } from './modules/order-display/order-display.component';
import { OrderListComponent } from './modules/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderDisplayComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
