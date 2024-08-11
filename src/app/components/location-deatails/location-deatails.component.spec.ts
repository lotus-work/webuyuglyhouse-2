import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeatailsComponent } from './location-deatails.component';

describe('LocationDeatailsComponent', () => {
  let component: LocationDeatailsComponent;
  let fixture: ComponentFixture<LocationDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
