import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import {ExpoPipe} from './pipes/expo.pipe'
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import {NgColorDirective} from './directivas/ngColor.directive'
import {TestComponent} from './components/test/test.component'
import {NgFocusDirective} from './directivas/ngFocus.directive'
@NgModule({
   declarations: [		
      AppComponent,
      PersonaComponent,
      ExpoPipe,
      PurePipe,
      ImpurePipe,
      NgColorDirective,
      TestComponent,
      NgFocusDirective
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
