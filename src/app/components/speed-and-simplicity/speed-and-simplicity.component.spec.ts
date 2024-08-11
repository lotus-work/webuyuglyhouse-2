import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedAndSimplicityComponent } from './speed-and-simplicity.component';

describe('SpeedAndSimplicityComponent', () => {
  let component: SpeedAndSimplicityComponent;
  let fixture: ComponentFixture<SpeedAndSimplicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedAndSimplicityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedAndSimplicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
