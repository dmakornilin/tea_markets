import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Order} from './order/order';
import {SuccessSend} from './order/success-send/success-send';

const routes: Routes = [
  {path : 'order', component: Order },
  {path : 'success', component: SuccessSend },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
