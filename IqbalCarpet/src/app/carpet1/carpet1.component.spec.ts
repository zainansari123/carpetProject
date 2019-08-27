import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpet1Component } from './carpet1.component';

describe('Carpet1Component', () => {
  let component: Carpet1Component;
  let fixture: ComponentFixture<Carpet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
