import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsTraditionalRealtorsComponent } from './vs-traditional-realtors.component';

describe('VsTraditionalRealtorsComponent', () => {
  let component: VsTraditionalRealtorsComponent;
  let fixture: ComponentFixture<VsTraditionalRealtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsTraditionalRealtorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsTraditionalRealtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
