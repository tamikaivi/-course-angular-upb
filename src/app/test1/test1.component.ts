import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, DoCheck, OnChanges, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() name: string = "vivian";

  constructor() { }

  ngOnInit() {
    console.log('On Init')
  }

  ngOnChanges(){
    console.log('On change')
  }
  ngDoCheck(){
    console.log('On check')
  }

  ngAfterContentInit(){
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }
  ngOnDestroy(){
    console.log("Destroy")
  }
  

}
