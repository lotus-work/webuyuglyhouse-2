import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoNotMailComponent } from './do-not-mail.component';

describe('DoNotMailComponent', () => {
  let component: DoNotMailComponent;
  let fixture: ComponentFixture<DoNotMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoNotMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoNotMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
