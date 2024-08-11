import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItWorksComponent } from './home-it-works.component';

describe('HomeItWorksComponent', () => {
  let component: HomeItWorksComponent;
  let fixture: ComponentFixture<HomeItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeItWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
