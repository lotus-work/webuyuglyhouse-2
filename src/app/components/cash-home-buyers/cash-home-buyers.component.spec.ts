import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashHomeBuyersComponent } from './cash-home-buyers.component';

describe('CashHomeBuyersComponent', () => {
  let component: CashHomeBuyersComponent;
  let fixture: ComponentFixture<CashHomeBuyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashHomeBuyersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashHomeBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
