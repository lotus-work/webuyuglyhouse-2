import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsCarousalComponent } from './reviews-carousal.component';

describe('ReviewsCarousalComponent', () => {
  let component: ReviewsCarousalComponent;
  let fixture: ComponentFixture<ReviewsCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsCarousalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
