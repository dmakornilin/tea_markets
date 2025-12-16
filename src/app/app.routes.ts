import { Routes } from '@angular/router';
import {Chart} from './components/pages/chart/chart';
import {Catalog} from './components/pages/catalog/catalog';
import {TeaCard} from './components/pages/tea-card/tea-card';
import {Order} from './components/pages/order/order';
import {SuccessSend} from './components/pages/success-send/success-send';

export const routes: Routes =[
  {path : '', component: Chart },
  {path : 'catalog', component: Catalog },
  {path : 'catalog/:id', component: TeaCard },
  {path : 'order', component: Order },
  {path : 'success', component: SuccessSend },
  {path : '**', redirectTo: ''},
];
