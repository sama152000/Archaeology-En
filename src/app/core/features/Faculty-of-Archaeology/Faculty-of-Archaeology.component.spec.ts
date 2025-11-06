/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacultyOfArchaeologyComponent } from './Faculty-of-Archaeology.component';

describe('FacultyOfArchaeologyComponent', () => {
  let component: FacultyOfArchaeologyComponent;
  let fixture: ComponentFixture<FacultyOfArchaeologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyOfArchaeologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyOfArchaeologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
