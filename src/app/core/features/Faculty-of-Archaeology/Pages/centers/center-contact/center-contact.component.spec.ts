/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterContactComponent } from './center-contact.component';

describe('CenterContactComponent', () => {
  let component: CenterContactComponent;
  let fixture: ComponentFixture<CenterContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
