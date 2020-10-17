import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth.guard";
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { OrderTableComponent } from './order-table/order-table.component';

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent,canActivate: [AuthGuard],
    children: [
        { path: "products/:mode/:id", component: ProductEditorComponent },
        { path: "products/:mode", component: ProductEditorComponent },
        { path: "products", component: ProductTableComponent },
        { path: "orders", component: OrderTableComponent },
        { path: "**", redirectTo: "products" }
        ] },
    { path: "**", redirectTo: "auth" }
    ]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AdminComponent, AuthComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent],
    providers : [AuthGuard]
})
export class AdminModule {
     
}