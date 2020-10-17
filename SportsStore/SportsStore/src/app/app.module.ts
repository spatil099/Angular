import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from "./store/store.module";
import { RouterModule } from "@angular/router";

import {CartCheckoutComponent as CheckoutComponent} from './store/cart-checkout/cart-checkout.component'
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { StoreFirstGuard } from "./storeFirst.guard"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "/store" }
      ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
