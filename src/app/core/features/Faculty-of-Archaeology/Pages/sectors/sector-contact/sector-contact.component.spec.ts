/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectorContactComponent } from './sector-contact.component';

describe('SectorContactComponent', () => {
  let component: SectorContactComponent;
  let fixture: ComponentFixture<SectorContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
