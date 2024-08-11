import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsLocalFlippersComponent } from './vs-local-flippers.component';

describe('VsLocalFlippersComponent', () => {
  let component: VsLocalFlippersComponent;
  let fixture: ComponentFixture<VsLocalFlippersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsLocalFlippersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsLocalFlippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
