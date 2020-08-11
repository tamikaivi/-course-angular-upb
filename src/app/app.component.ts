import { Component, OnInit } from '@angular/core';
import {from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-course';

  aw=true;
  aux=3;
person = ["vivian", "marco", "maria", "lupe" ]
  ngOnInit(){

  }
}
