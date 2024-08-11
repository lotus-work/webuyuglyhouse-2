import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRentalPropertyComponent } from './sell-rental-property.component';

describe('SellRentalPropertyComponent', () => {
  let component: SellRentalPropertyComponent;
  let fixture: ComponentFixture<SellRentalPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellRentalPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellRentalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
