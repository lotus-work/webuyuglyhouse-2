import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritedHouseComponent } from './inherited-house.component';

describe('InheritedHouseComponent', () => {
  let component: InheritedHouseComponent;
  let fixture: ComponentFixture<InheritedHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritedHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
