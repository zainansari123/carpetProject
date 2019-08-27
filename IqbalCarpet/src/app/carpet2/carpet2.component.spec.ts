import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpet2Component } from './carpet2.component';

describe('Carpet2Component', () => {
  let component: Carpet2Component;
  let fixture: ComponentFixture<Carpet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
