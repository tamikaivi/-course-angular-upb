import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagecomComponent} from './components/pagecom/pagecom.component'

const routes: Routes = [
  {
    path: '', component: PagecomComponent, 
    children: [
        {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home',loadChildren: ()=> import('./home/home.module').then(n => n.HomeModule) },
  { path: 'admin',loadChildren: ()=> import('./admin/admin.module').then(n => n.AdminModule) },
  { path: 'list',loadChildren: ()=> import('./list/list.module').then(n => n.ListModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagemoduleRoutingModule { }
