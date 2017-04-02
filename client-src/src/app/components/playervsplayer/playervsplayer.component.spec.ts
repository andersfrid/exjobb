/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayervsplayerComponent } from './playervsplayer.component';

describe('PlayervsplayerComponent', () => {
  let component: PlayervsplayerComponent;
  let fixture: ComponentFixture<PlayervsplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayervsplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayervsplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
