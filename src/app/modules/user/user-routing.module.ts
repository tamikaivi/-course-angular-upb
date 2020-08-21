import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsecomComponent} from './usecom/usecom.component'
const routes: Routes = [
  { path: '', component: UsecomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
