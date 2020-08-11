import { Component, OnInit, Input } from '@angular/core';
import {from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-course';

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


 ngOnInit(){

  }
}
