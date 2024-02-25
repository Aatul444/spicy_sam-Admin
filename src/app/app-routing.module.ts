import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { TableBookingsComponent } from './pages/table-bookings/table-bookings.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'table-bookings',
    component:TableBookingsComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
