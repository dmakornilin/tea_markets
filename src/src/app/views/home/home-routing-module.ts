import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Chart} from './chart/chart';

const routes: Routes = [
  {path: '', component: Chart}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
