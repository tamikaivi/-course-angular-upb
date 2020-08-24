import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsecomComponent} from './usecom/usecom.component'
import {User1Component} from './user1/user1.component'
import {User2Component} from './user2/user2.component'

const routes: Routes = [
  { path: '',component: UsecomComponent,
   children: [{
     path: 'user1', component: User1Component
   },
  {path: 'user2', component: User2Component} 
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
