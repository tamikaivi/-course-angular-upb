import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsecomComponent} from './usecom/usecom.component'

@NgModule({
  declarations: [UsecomComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
