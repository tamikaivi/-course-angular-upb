import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component'
import {AdminComponent} from './components/admin/admin.component'
import {AboutComponent} from './components/about/about.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingRoutes } from './app-routing.routing'
import {Home1Component} from './components/home1/home1.component'
import {Home2Component} from './components/home2/home2.component'
@NgModule({
   declarations: [		
      AppComponent,
   Home1Component,
   Home2Component,
   HomeComponent,
   AdminComponent,
   AboutComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingRoutes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
