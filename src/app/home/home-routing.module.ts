import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './components/drink/drink.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


const routes: Routes = [
  { path: 'drink', component: DrinkComponent },
  { path: 'details', component: OrderDetailsComponent },
  { path: 'confirmation', component: OrderConfirmationComponent },
  { path: '', redirectTo: 'drink', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
