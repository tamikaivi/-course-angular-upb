import { Component, OnInit, Input } from '@angular/core';
import {from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-course';
  aw=true;
  name="vivian";
  lastname="loza";

 personas=[
  { name:'vivian',
    lastName: 'loza',
    age:21,
    enable: false
  },
  { name:'la caballota',
    lastName: 'loza',
    age:21,
    enable: true
  },
  { name:'lupe',
    lastName: 'loza',
    age:21,
    enable: false
  },
  { name:'maria',
    lastName: 'loza',
    age:21,
    enable: true
  }
 ]

 numbers = [1,2,3,4,5,6,7,8,9,10];
 auxnumber: number = 3;
 auxxponent: number = 2;

 ngOnInit(){
   console.log('Pura',this.pura(2,2));
   console.log('Pura',this.impura(2,2));

  }

  pura(a: number, b: number){
    return a+b;
  }
  impura(a: number, b: number){
    return a +b + Math.random();
  }


}
