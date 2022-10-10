import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product',component: ProductsComponent},
  {path:'cart',component: CartComponent},
  {path:'payment',component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
