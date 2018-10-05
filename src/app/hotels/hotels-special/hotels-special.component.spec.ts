import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSpecialComponent } from './hotels-special.component';

describe('HotelsSpecialComponent', () => {
  let component: HotelsSpecialComponent;
  let fixture: ComponentFixture<HotelsSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
