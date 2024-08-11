import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndTestComponent } from './experience-and-test.component';

describe('ExperienceAndTestComponent', () => {
  let component: ExperienceAndTestComponent;
  let fixture: ComponentFixture<ExperienceAndTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAndTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAndTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
