import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersItemComponent } from './components/customers/customers-item/customers-item.component';
import { CustomersFormComponent } from './components/customers/customers-form/customers-form.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomersComponent } from './components/customers/customers.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersItemComponent,
    CustomersFormComponent,
    CustomersListComponent,
    NavbarComponent,
    HomeComponent,
    ProductsFormComponent,
    ProductsListComponent,
    CustomersComponent,
    TestComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
