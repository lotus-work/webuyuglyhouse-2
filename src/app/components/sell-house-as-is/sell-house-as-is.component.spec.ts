import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellHouseAsIsComponent } from './sell-house-as-is.component';

describe('SellHouseAsIsComponent', () => {
  let component: SellHouseAsIsComponent;
  let fixture: ComponentFixture<SellHouseAsIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellHouseAsIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellHouseAsIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
