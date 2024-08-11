import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsOnlineBuyersComponent } from './vs-online-buyers.component';

describe('VsOnlineBuyersComponent', () => {
  let component: VsOnlineBuyersComponent;
  let fixture: ComponentFixture<VsOnlineBuyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsOnlineBuyersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsOnlineBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
