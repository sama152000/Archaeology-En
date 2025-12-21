/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnitContactComponent } from './unit-contact.component';

describe('UnitContactComponent', () => {
  let component: UnitContactComponent;
  let fixture: ComponentFixture<UnitContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
