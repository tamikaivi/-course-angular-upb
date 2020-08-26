import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import {ListsComponent} from './components/lists/lists.component'

@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
