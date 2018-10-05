import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedHotelComponent } from './top-rated-hotel.component';

describe('TopRatedHotelComponent', () => {
  let component: TopRatedHotelComponent;
  let fixture: ComponentFixture<TopRatedHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
