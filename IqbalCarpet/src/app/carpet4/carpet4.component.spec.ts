import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpet4Component } from './carpet4.component';

describe('Carpet4Component', () => {
  let component: Carpet4Component;
  let fixture: ComponentFixture<Carpet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
