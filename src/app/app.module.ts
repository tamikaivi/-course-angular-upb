import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import {ExpoPipe} from './pipes/expo.pipe'
@NgModule({
   declarations: [
      AppComponent,
      PersonaComponent,
      ExpoPipe

   ],
   imports: [
      BrowserModule,
      FormsModule
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
