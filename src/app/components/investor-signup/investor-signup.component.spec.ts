import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorSignupComponent } from './investor-signup.component';

describe('InvestorSignupComponent', () => {
  let component: InvestorSignupComponent;
  let fixture: ComponentFixture<InvestorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
