import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDistressComponent } from './financial-distress.component';

describe('FinancialDistressComponent', () => {
  let component: FinancialDistressComponent;
  let fixture: ComponentFixture<FinancialDistressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialDistressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialDistressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
