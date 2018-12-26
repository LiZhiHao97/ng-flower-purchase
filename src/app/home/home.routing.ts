import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { AllComponent } from './all/all.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const homeRoutes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          redirectTo: 'all',
          pathMatch: 'full'
        },
        {
          path: 'all',
          component: AllComponent,
          pathMatch: 'full'
        },
        {
          path: 'shopping-cart',
          component: ShoppingCartComponent
        },
        {
          path: 'orders',
          component: OrdersComponent
        },
        {
          path: 'address',
          component: AddressComponent
        },
        {
          path: 'all/:pid',
          component: ProductDetailComponent
        }
      ]
    }
];
