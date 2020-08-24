import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsecomComponent} from './usecom/usecom.component'
import {User1Component} from './user1/user1.component'
import {User2Component} from './user2/user2.component'

@NgModule({
  declarations: [UsecomComponent,
    User1Component,
    User2Component],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
