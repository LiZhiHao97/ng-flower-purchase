import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { PersonCenterMenuComponent } from './person-center-menu/person-center-menu.component';
import { AllComponent } from './all/all.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    PersonCenterMenuComponent,
    AllComponent,
    ShoppingCartComponent,
    OrdersComponent,
    AddressComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
