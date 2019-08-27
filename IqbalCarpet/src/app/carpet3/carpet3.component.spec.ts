import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpet3Component } from './carpet3.component';

describe('Carpet3Component', () => {
  let component: Carpet3Component;
  let fixture: ComponentFixture<Carpet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
