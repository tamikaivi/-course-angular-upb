/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsecomComponent } from './usecom.component';

describe('UsecomComponent', () => {
  let component: UsecomComponent;
  let fixture: ComponentFixture<UsecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
