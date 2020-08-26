import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { PagemoduleRoutingModule } from './pagemodule-routing.module';
import {PagecomComponent} from './components/pagecom/pagecom.component'

@NgModule({
  declarations: [PagecomComponent],
  imports: [
    CommonModule,
    PagemoduleRoutingModule,
    MatButtonModule
  ]
})
export class PagemoduleModule { }
