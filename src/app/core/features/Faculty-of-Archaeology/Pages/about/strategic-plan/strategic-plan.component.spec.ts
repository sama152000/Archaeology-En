/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrategicPlanComponent } from './strategic-plan.component';

describe('StrategicPlanComponent', () => {
  let component: StrategicPlanComponent;
  let fixture: ComponentFixture<StrategicPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
