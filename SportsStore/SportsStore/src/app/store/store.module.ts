import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent} from './cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,CartCheckoutComponent,CartDetailComponent],
    exports: [StoreComponent,CartCheckoutComponent,CartDetailComponent]
})

export class StoreModule { }