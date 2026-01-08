import { Routes } from '@angular/router';
import {Layout} from './views/layout/layout';

export const routes: Routes =[
  {
    path: '', component: Layout,
    children: [
      {path: '', loadChildren: () => import('./views/home/home-module').then(m => m.HomeModule)},
      {path : '', loadChildren: ()=> import('./views/order/order-module').then(m => m.OrderModule)   },
      {path : '', loadChildren: ()=> import('./views/products/products-module').then(m => m.ProductsModule)   },
    ]
  },
  {path : '**', redirectTo: ''},
];
