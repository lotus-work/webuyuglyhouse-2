import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTouchComponent } from './personal-touch.component';

describe('PersonalTouchComponent', () => {
  let component: PersonalTouchComponent;
  let fixture: ComponentFixture<PersonalTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTouchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
