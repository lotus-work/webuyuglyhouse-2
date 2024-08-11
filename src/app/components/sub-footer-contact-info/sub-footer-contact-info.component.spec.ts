import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFooterContactInfoComponent } from './sub-footer-contact-info.component';

describe('SubFooterContactInfoComponent', () => {
  let component: SubFooterContactInfoComponent;
  let fixture: ComponentFixture<SubFooterContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFooterContactInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFooterContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
