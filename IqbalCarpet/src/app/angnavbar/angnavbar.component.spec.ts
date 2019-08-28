import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngnavbarComponent } from './angnavbar.component';

describe('AngnavbarComponent', () => {
  let component: AngnavbarComponent;
  let fixture: ComponentFixture<AngnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
