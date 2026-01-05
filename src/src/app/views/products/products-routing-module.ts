import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Catalog} from './catalog/catalog';
import {TeaCard} from '../order/order/tea-card/tea-card';

const routes: Routes = [
  {path : 'catalog', component: Catalog },
  {path : 'tea-card', component: TeaCard },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
