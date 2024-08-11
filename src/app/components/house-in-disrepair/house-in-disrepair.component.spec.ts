import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInDisrepairComponent } from './house-in-disrepair.component';

describe('HouseInDisrepairComponent', () => {
  let component: HouseInDisrepairComponent;
  let fixture: ComponentFixture<HouseInDisrepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseInDisrepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseInDisrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
