import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsEventsComponent } from './hotels-events.component';

describe('HotelsEventsComponent', () => {
  let component: HotelsEventsComponent;
  let fixture: ComponentFixture<HotelsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
