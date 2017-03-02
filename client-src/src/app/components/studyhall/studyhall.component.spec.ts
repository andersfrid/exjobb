/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudyhallComponent } from './studyhall.component';

describe('StudyhallComponent', () => {
  let component: StudyhallComponent;
  let fixture: ComponentFixture<StudyhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
