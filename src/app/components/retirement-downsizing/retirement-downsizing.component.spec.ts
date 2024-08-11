import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementDownsizingComponent } from './retirement-downsizing.component';

describe('RetirementDownsizingComponent', () => {
  let component: RetirementDownsizingComponent;
  let fixture: ComponentFixture<RetirementDownsizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementDownsizingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetirementDownsizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
